import { createAction, props } from "@ngrx/store";
import { Credentials } from "src/app/shared/models/credentials.model";
import { User } from "src/app/shared/models/user.model";

export const getAllActivities = createAction("[ACTIVITIES] Get All");

// GET LOGIN USSER
export const getLoginUser = createAction(
  "[PROFILE] Get login user",
  props<{ credentials: Credentials }>()
);

export const getLoginUserSuccess = createAction(
  "[PROFILE] Get login user success",
  props<{ user: User }>()
);
export const getLoginUserError = createAction(
  "[PROFILE] Get login user error",
  props<{ payload: any }>()
);

// CLEAN LOGIN USSER
export const cleanLoginUser = createAction("[PROFILE] Clean login user");

// LOGOUT
export const LOGOUT = "[App] Logout";
export const logoutAction = createAction("[App] Logout");
