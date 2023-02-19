import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const userState = (state: AppState) => state.user;

export const userSelect = createSelector(userState, (state) => state.user.name);
