import { login, loginSuccess, loginFailure, logout } from "../actions";
import { createReducer, on } from "@ngrx/store";
import { Credentials } from "src/app/shared/models/credentials.model";

export interface loginState {
  credentials: Credentials;
  loggedIn: boolean;
  error: string | null;
  pending: boolean;
}

export const initialState: loginState = {
  credentials: null,
  loggedIn: false,
  error: null,
  pending: false,
};

const _loginReducer = createReducer(
  initialState,
  on(login, (state) => ({
    ...state,
    loggedIn: false,
    error: null,
    pending: true,
  })),
  on(loginSuccess, (state, { credentials }) => ({
    ...state,
    credentials: credentials,
    loggedIn: true,
    error: null,
    pending: false,
  })),
  on(loginFailure, (state, { payload }) => ({
    ...state,
    error: payload,
    loggedIn: false,
    pending: false,
  })),
  on(logout, () => initialState)
);

export function loginReducer(state, action) {
  return _loginReducer(state, action);
}
