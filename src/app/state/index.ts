
import * as fromAuth from './auth.reducer';
import * as fromLogin from './login-page.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment.prod';

export interface State {
  auth: fromAuth.State;
  login: fromLogin.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  login: fromLogin.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

// auth
export const selectAuthState = createFeatureSelector<fromAuth.State>('auth');

export const selectAuthUser = createSelector(
  selectAuthState,
  fromAuth.selectedUser
);

export const selectIsLoggedIn = createSelector(selectAuthUser, user => !!user);

// login
export const selectLoginState = createFeatureSelector<fromLogin.State>('login');

export const selectLoginPending = createSelector(selectLoginState, fromLogin.selectPending);

export const selectLoginError = createSelector(selectLoginState, fromLogin.selectPending);
