import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectCart = (state: AppState) => state.cart;
export const selectAllCart = createSelector(
  selectCart,
  (state) => state.cartItems
);

export const cartTotal = createSelector(selectCart, (state) => state.total);
