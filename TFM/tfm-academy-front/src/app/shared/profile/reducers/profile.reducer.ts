import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { User } from "src/app/shared/models/user.model";

import * as ProfileActions from "../actions/profile.actions";
import { LOGOUT } from "../actions/profile.actions";

export interface ProfileState {
  userLoged: User;
  signUp: Array<number>;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: ProfileState = {
  userLoged: new User(),
  signUp: [],
  loading: false,
  loaded: false,
  error: null,
};
// ...state.favorites.filter(favId => favId !== id)
const _ProfileReducer = createReducer(
  initialState,

  //LOGIN USER
  on(ProfileActions.getLoginUser, (state) => ({ ...state, loading: true })),
  on(ProfileActions.getLoginUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    userLoged: user,
  })),
  on(ProfileActions.cleanLoginUser, () => initialState)
);

export function ProfileReducer(state, action) {
  return _ProfileReducer(state, action);
}

export function clearStateMetaReducer<State extends {}>(
  reducer: ActionReducer<State>
): ActionReducer<State> {
  return function clearStateFn(state: State, action: Action) {
    if (action.type === LOGOUT) {
      state = {} as State;
    }
    return reducer(state, action);
  };
}
