import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CheckOutComponent } from './cart/check-out/check-out.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    component: CartListComponent,
  },
  {
    path: 'check-out',
    component: CheckOutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
