import { createAction, props } from "@ngrx/store";
import { Assignature } from "../models/assignature.model";

export const assignatureDetailUpdate = createAction(
  "[Update] AssignatureDetail",
  props<{ assignature: Assignature }>()
);
