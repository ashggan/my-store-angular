import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartItem } from 'src/app/models/cartItem';
import { AppState } from 'src/app/state/app.state';
import { getCartItems } from 'src/app/state/cart/cart.action';
import { selectAllCart } from 'src/app/state/cart/cart.selectors';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  cartItems$: Observable<cartItem[]>;

  constructor(private store: Store<AppState>) {
    this.cartItems$ = this.store.pipe(select(selectAllCart));
  }
  ngOnInit() {
    // console.log(this.cartItems$);

    this.store.dispatch(getCartItems());
  }
}
