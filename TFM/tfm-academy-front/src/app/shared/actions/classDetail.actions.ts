import { createAction, props } from "@ngrx/store";
import { Class } from "../models/class.model";

export const classDetailUpdate = createAction(
  "[Update] ClassDetail",
  props<{ teacherClass: Class }>()
);
