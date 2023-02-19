import { on, createReducer } from '@ngrx/store';
import { cartItem } from 'src/app/models/cartItem';
import { addToCart, checkOut, getCartItems } from './cart.action';

export interface cartState {
  cartItems: cartItem[];
  total: number;
}

export const ininitalState: cartState = {
  cartItems: [],
  total: 0,
};

export const cartReducer = createReducer(
  ininitalState,
  on(addToCart, (state, { content }) => ({
    ...state,
    cartItems: [...state.cartItems, content],
    total:
      cartTotal(state.cartItems) + content.product.price * content.quantity,
  })),
  on(getCartItems, (state) => ({ ...state })),
  on(checkOut, (state) => ({ ...state, cartItems: [], total: 0 }))
);

const cartTotal = (arr: cartItem[]): number => {
  let total: number = 0;
  arr.forEach((item) => {
    total += item.product.price * item.quantity;
  });
  return total;
};

const addItem = (item: cartItem, cartList: cartItem[]): cartItem[] => {
  console.log(item);
  const cart = cartList.find(
    (cartItem) => cartItem.product.id === item.product.id
  );
  if (!cart) {
    cartList.push({ product: item.product, quantity: item.quantity });
  } else {
    cart.quantity = item.quantity;
  }
  return cartList;
};
