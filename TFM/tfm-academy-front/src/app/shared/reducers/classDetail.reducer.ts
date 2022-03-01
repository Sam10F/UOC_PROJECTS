import { classDetailUpdate } from "../actions";
import { createReducer, on } from "@ngrx/store";
import { Class } from "../models/class.model";

export interface classState {
  classDetail: Class;
  error: string | null;
  pending: boolean;
}

export const initialclassDetailReducerState: classState = {
  classDetail: null,
  error: null,
  pending: false,
};

const _classDetailReducer = createReducer(
  initialclassDetailReducerState,
  on(classDetailUpdate, (state, { teacherClass }) => ({
    ...state,
    classDetail: teacherClass,
    error: null,
    pending: true,
  }))
);

export function classDetailReducer(state, action) {
  return _classDetailReducer(state, action);
}
