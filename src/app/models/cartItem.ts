import { Product } from './product';

export class cartItem {
  static getCartTotal(cartcartItems: cartItem[]): number {
    throw new Error('Method not implemented.');
  }
  product: Product;
  quantity: number;

  constructor() {
    this.product = {
      id: 0,
      price: 0,
      name: '',
      description: '',
      url: '',
    };
    this.quantity = 0;
  }
}
