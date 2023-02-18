import { Injectable } from '@angular/core';
import { cartItem } from '../models/cartItem';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartlist: cartItem[] = [];
  total: number = 0;
  constructor() {}

  // addToCart(product: Product, quantity: number) {
  //   this.cartlist.push({ product, quantity });
  //   this.total += product.price * quantity;
  // }
}
