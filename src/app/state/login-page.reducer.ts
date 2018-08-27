import {AuthActions, AuthActionTypes} from '../auth/actions/auth.action';

export interface State {
  pending: boolean;
  error: string | null;
}

export const initialState: State = {
  pending: false,
  error: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.Login: {
      return {...state, pending: true};
    }
    case AuthActionTypes.LoginSuccess: {
      return initialState;
    }
    case AuthActionTypes.LoginFailure: {
      return { ...state, pending: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
}

export const selectPending = (state: State) => state.pending;
export const selectError = (state: State) => state.error;
