import {UserBase} from '../auth/models/user-base';
import {AuthActions, AuthActionTypes} from '../auth/actions/auth.action';

export interface State {
  user: UserBase | null;
}

export const initialState: State = {
  user: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {...state, user: action.payload.user};
    }

    case AuthActionTypes.LogoutConfirmed: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const selectedUser = (state: State) => state.user;
