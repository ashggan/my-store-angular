import { Injectable } from '@angular/core';
import { cartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: cartItem[] = [];

  constructor() {}

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

  checkOut() {
    this.cartList = [];
  }
}
