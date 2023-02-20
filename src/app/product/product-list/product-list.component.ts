import { Component } from '@angular/core';
import { cartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Product[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => (this.products = res));
  }

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  addToCart(item: cartItem) {
    this.cartService.addToCart(item);
    alert(`${item.product.name} is added to your cart`);
  }
}
