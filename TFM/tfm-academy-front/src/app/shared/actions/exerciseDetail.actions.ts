import { createAction, props } from "@ngrx/store";
import { Exercise } from "../models/exercise.model";

export const exerciseDetailUpdate = createAction(
  "[Update] ExerciseDetail",
  props<{ exercise: Exercise }>()
);
