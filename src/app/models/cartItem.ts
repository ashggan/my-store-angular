import { Product } from './product';

export class cartItem {
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
