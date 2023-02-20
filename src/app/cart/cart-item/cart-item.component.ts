import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cartItem: cartItem;
  @Output() removeItem: EventEmitter<cartItem> = new EventEmitter();

  constructor() {
    this.cartItem = {
      product: {
        id: 0,
        name: '',
        price: 0,
        description: '',
        url: '',
      },
      quantity: 0,
    };
  }

  remove(item: cartItem) {
    this.removeItem.emit(item);
  }
}
