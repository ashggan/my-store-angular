import { on, createReducer, INITIAL_STATE } from '@ngrx/store';
import { cartItem } from 'src/app/models/cartItem';
import { addToCart, checkOut, getCartItems, getCartTotal } from './cart.action';

export interface cartState {
  ld: boolean;

  cartcartItems: cartItem[];
}

export const ininitalState: cartState = {
  ld: false,
  cartcartItems: [],
};

export const cartReducer = createReducer(
  ininitalState,
  on(addToCart, (state, { content }) => ({
    ...state,
    cartcartItems: [...state.cartcartItems, content],
  })),
  on(getCartItems, (state) => ({ ...state })),
  on(checkOut, (state) => ({ ...state, cartcartItems: [] }))
);
