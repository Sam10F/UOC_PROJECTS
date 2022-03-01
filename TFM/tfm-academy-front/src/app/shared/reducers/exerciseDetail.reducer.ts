import { exerciseDetailUpdate } from "../actions";
import { createReducer, on } from "@ngrx/store";
import { Exercise } from "../models/exercise.model";

export interface exerciseState {
  exerciseDetail: Exercise;
  error: string | null;
  pending: boolean;
}

export const exerciseInitialState: exerciseState = {
  exerciseDetail: null,
  error: null,
  pending: false,
};

const _exerciseDetailReducer = createReducer(
  exerciseInitialState,
  on(exerciseDetailUpdate, (state, { exercise }) => ({
    ...state,
    exerciseDetail: exercise,
    error: null,
    pending: true,
  }))
);

export function exerciseDetailReducer(state, action) {
  return _exerciseDetailReducer(state, action);
}
