import { Component, Input, OnInit } from "@angular/core";
import { ExerciseType } from "src/app/shared/models/exerciseType.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { MatDialog } from "@angular/material/dialog";
import { TeachersService } from "src/app/shared/services/teachers.service";
import { DialogoConfirmacionComponent } from "src/app/shared/components/dialogo-confirmacion/dialogo-confirmacion.component";
import { ExerciseService } from "src/app/shared/services/exercise.service";

@Component({
  selector: "app-exercise-type-detail",
  templateUrl: "./exercise-type-detail.component.html",
  styleUrls: ["./exercise-type-detail.component.scss"],
})
export class ExerciseTypeDetailComponent implements OnInit {
  @Input() refreshExerciseTypes: (args: any) => void;
  exerciseTypeDetail: ExerciseType;

  constructor(
    private store: Store<AppState>,
    public dialogo: MatDialog,
    private exerciseService: ExerciseService
  ) {}

  ngOnInit() {
    this.store.select("ExerciseTypeDetail").subscribe((exerciseTypeDetail) => {
      this.exerciseTypeDetail = exerciseTypeDetail.exerciseTypeDetail;
    });
  }

  deleteExerciseType() {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Quieres eliminar el typo de ejercicio con id ${this.exerciseTypeDetail.id}?`,
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.exerciseService
            .deleteExerciseType(this.exerciseTypeDetail.id)
            .subscribe((success) => {
              if (success) this.refreshExerciseTypes(this.exerciseService);
            });
        }
      });
  }
}
