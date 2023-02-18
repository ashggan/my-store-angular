import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
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

  constructor(private productService: ProductService) {}
}
