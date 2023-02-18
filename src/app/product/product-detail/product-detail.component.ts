import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { addToCart } from 'src/app/state/cart/cart.action';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product: Product | undefined;
  product_id: number = 0;
  quantity: number;
  cartItem: cartItem;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private store: Store
  ) {
    this.product = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
    this.quantity = 1;
    this.cartItem = {
      product: this.product,
      quantity: this.quantity,
    };
  }
  ngOnInit(): void {
    this.product_id = Number(this.activeRoute.snapshot.paramMap.get('id'));

    this.productService.getProducts().subscribe((data) => {
      this.product = data.find((p) => p.id == this.product_id);
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  addToCart() {
    if (this.product) {
      this.cartItem = { product: this.product, quantity: this.quantity };
      this.store.dispatch(addToCart({ content: this.cartItem }));
      alert('added to cart');
    }
  }
}
