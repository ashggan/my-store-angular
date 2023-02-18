import { createAction, props } from '@ngrx/store';
import { cartItem } from 'src/app/models/cartItem';

export const addToCart = createAction(
  '[Cart Component] add items to cart',
  props<{ content: cartItem }>()
);

export const getCartItems = createAction('[Cart Component] get all cart items');
export const getCartTotal = createAction('[Cart Component] Get cart total');
export const checkOut = createAction('[Cart Component] checkOut');
