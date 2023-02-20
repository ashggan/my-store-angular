import { Injectable } from '@angular/core';
import { cartItem } from '../models/cartItem';
import { CheckOutInfo } from '../models/CheckOutInfo';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: cartItem[] = [];
  checkout_info: CheckOutInfo;
  constructor() {
    this.checkout_info = {
      name: '',
      total: 0,
      items_count: 0,
    };
  }

  addToCart(newItem: cartItem) {
    let item = this.cartList.find(
      (item) => item.product.id === newItem.product.id
    );
    if (!item) {
      this.cartList.push(newItem);
    } else {
      item.quantity = newItem.quantity;
    }
  }

  removeItem(item: cartItem) {
    this.cartList = this.cartList.filter(
      (i) => i.product.id !== item.product.id
    );
  }

  getTotalItems(): number {
    let total = 0;
    this.cartList.forEach((item) => {
      total += item.quantity * item.product.price;
    });
    return total;
  }

  checkOut(user: User) {
    this.checkout_info = {
      name: user.name,
      total: this.getTotalItems(),
      items_count: this.cartList.length,
    };

    this.cartList = [];
  }

  inCart(product_id: number): boolean {
    let item = this.cartList.find((item) => item.product.id === product_id);

    return item ? true : false;
  }
}
