import { ActionReducerMap } from "@ngrx/store";
import * as loginReducer from "./shared/login/reducers";
import * as profileReducer from "./shared/profile/reducers/profile.reducer";
import * as userDetailReducer from "./shared/reducers";
import * as classDetailReducer from "./shared/reducers";
import * as assignatureDetailReducer from "./shared/reducers";
import * as exerciseDetailReducer from "./shared/reducers";
import * as exerciseTypeDetailReducer from "./shared/reducers";

export interface AppState {
  Login: loginReducer.loginState;
  User: profileReducer.ProfileState;
  UserDetail: userDetailReducer.userState;
  ClassDetail: classDetailReducer.classState;
  AssignatureDetail: assignatureDetailReducer.assignatureState;
  ExerciseDetail: exerciseDetailReducer.exerciseState;
  ExerciseTypeDetail: exerciseTypeDetailReducer.exerciseTypeState;
}

export const appReducers: ActionReducerMap<AppState> = {
  Login: loginReducer.loginReducer,
  User: profileReducer.ProfileReducer,
  UserDetail: userDetailReducer.userDetailReducer,
  ClassDetail: classDetailReducer.classDetailReducer,
  AssignatureDetail: assignatureDetailReducer.assignatureDetailReducer,
  ExerciseDetail: exerciseDetailReducer.exerciseDetailReducer,
  ExerciseTypeDetail: exerciseTypeDetailReducer.exerciseTypeDetailReducer,
};
