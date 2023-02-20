import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { cartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<cartItem> = new EventEmitter();
  quantity: number;

  constructor(private router: Router) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: '',
    };
    this.quantity = 1;
  }

  ngOnInit() {}

  showProduct(product_id: number) {
    this.router.navigate(['/product', product_id]);
  }

  add(product: Product) {
    const cartItem = { product, quantity: this.quantity };
    this.addToCart.emit(cartItem);
  }
}
