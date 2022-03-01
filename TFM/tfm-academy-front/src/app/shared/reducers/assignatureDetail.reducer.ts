import { assignatureDetailUpdate } from "../actions";
import { createReducer, on } from "@ngrx/store";
import { Assignature } from "../models/assignature.model";

export interface assignatureState {
  assignatureDetail: Assignature;
  error: string | null;
  pending: boolean;
}

export const assignatureInitialState: assignatureState = {
  assignatureDetail: null,
  error: null,
  pending: false,
};

const _assignatureDetailReducer = createReducer(
  assignatureInitialState,
  on(assignatureDetailUpdate, (state, { assignature }) => ({
    ...state,
    assignatureDetail: assignature,
    error: null,
    pending: true,
  }))
);

export function assignatureDetailReducer(state, action) {
  return _assignatureDetailReducer(state, action);
}
