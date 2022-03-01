import { catchError, map, mergeMap } from "rxjs/internal/operators";
import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import * as UserActions from "../actions";
import { of } from "rxjs";
import { TeachersService } from "../services/teachers.service";

@Injectable()
export class ActivitiesEffects {
  constructor(
    private actions$: Actions,
    private teacherService: TeachersService
  ) {}

  deleteActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteTeacher),
      mergeMap((actionData) =>
        this.teacherService
          .deleteTeacher(actionData.id)
          .pipe(
            map(() => UserActions.deleteTeacherSuccess({ id: actionData.id }))
          )
      )
    )
  );
}
