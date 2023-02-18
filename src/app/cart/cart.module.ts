import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CheckOutFormComponent } from './check-out-form/check-out-form.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartListComponent,
    CheckOutFormComponent,
    CartItemComponent,
    CheckOutComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class CartModule {}
