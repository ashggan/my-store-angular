import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { setUser } from './user.action';

export interface userState {
  user: User;
}

export const ininitalState: userState = {
  user: {
    name: '',
    address: '',
    credit_card: '',
  },
};

export const UserReducer = createReducer(
  ininitalState,
  on(setUser, (state, { newUser }) => ({ user: newUser }))
);
