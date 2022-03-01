import { createAction, props } from "@ngrx/store";
import { ExerciseType } from "../models/exerciseType.model";

export const exerciseTypeDetailUpdate = createAction(
  "[Update] ExerciseTypeDetail",
  props<{ exerciseType: ExerciseType }>()
);
