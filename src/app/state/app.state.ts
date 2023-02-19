import { cartState } from './cart/cart.reducer';
import { userState } from './user/user.reducer';

export interface AppState {
  cart: cartState;
  user: userState;
}
