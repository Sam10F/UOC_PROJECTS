import { createAction, props } from "@ngrx/store";
import { Credentials } from "src/app/shared/models/credentials.model";

export const login = createAction(
  "[Login] Login",
  props<{ credentials: Credentials }>()
);

export const loginSuccess = createAction(
  "[Login] Login Success",
  props<{ credentials: Credentials }>()
);

export const loginFailure = createAction(
  "[Login] Login Failure",
  props<{ payload: any }>()
);

export const loginRedirect = createAction("[Login] Login Redirect");

export const logout = createAction("[Login] Logout");
export const logoutConfirmation = createAction("[Login] Logout Confirmation");
