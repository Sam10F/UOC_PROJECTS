import { createAction, props } from "@ngrx/store";
import { User } from "../models/user.model";

export const userDetailUpdate = createAction(
  "[Update] UserDetail",
  props<{ user: User }>()
);
