import { exerciseTypeDetailUpdate } from "../actions";
import { createReducer, on } from "@ngrx/store";
import { ExerciseType } from "../models/exerciseType.model";

export interface exerciseTypeState {
  exerciseTypeDetail: ExerciseType;
  error: string | null;
  pending: boolean;
}

export const exerciseTypeInitialState: exerciseTypeState = {
  exerciseTypeDetail: null,
  error: null,
  pending: false,
};

const _exerciseTypeDetailReducer = createReducer(
  exerciseTypeInitialState,
  on(exerciseTypeDetailUpdate, (state, { exerciseType }) => ({
    ...state,
    exerciseTypeDetail: exerciseType,
    error: null,
    pending: true,
  }))
);

export function exerciseTypeDetailReducer(state, action) {
  return _exerciseTypeDetailReducer(state, action);
}
