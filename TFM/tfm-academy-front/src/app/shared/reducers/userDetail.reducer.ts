import { userDetailUpdate } from "../actions";
import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user.model";

export interface userState {
  userDetail: User;
  error: string | null;
  pending: boolean;
}

export const initialState: userState = {
  userDetail: null,
  error: null,
  pending: false,
};

const _userDetailReducer = createReducer(
  initialState,
  on(userDetailUpdate, (state, { user }) => ({
    ...state,
    userDetail: user,
    error: null,
    pending: true,
  }))
);

export function userDetailReducer(state, action) {
  return _userDetailReducer(state, action);
}
