import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class ProductModule {}
