import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { addToCart } from 'src/app/state/cart/cart.action';
import { Store } from '@ngrx/store';
import { cartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product;
  quantity: number;
  cartItem: cartItem;

  constructor(private router: Router, private store: Store) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: '',
    };
    this.quantity = 1;
    this.cartItem = {
      product: this.product,
      quantity: this.quantity,
    };
  }
  ngOnInit() {}

  showProduct(product_id: number) {
    this.router.navigate(['/product', product_id]);
  }

  addTocart() {
    this.cartItem = { product: this.product, quantity: this.quantity };
    this.store.dispatch(addToCart({ content: this.cartItem }));
  }
}
