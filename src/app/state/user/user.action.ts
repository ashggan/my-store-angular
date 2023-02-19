import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const setUser = createAction(
  '[user Component]',
  props<{ newUser: User }>()
);
