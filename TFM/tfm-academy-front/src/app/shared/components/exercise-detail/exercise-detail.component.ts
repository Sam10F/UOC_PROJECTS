import { Component, Input, OnChanges } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { Exercise } from "../../models/exercise.model";
import { ExerciseService } from "../../services/exercise.service";
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component";

@Component({
  selector: "app-exercise-detail",
  templateUrl: "./exercise-detail.component.html",
  styleUrls: ["./exercise-detail.component.scss"],
})
export class ExerciseDetailComponent {
  @Input() refreshExercises: (args: any) => void;
  exerciseDetail: Exercise;

  constructor(
    public exerciseService: ExerciseService,
    private store: Store<AppState>,
    public dialogo: MatDialog
  ) {}

  ngOnInit() {
    this.store.select("ExerciseDetail").subscribe((exerciseDetail) => {
      this.exerciseDetail = exerciseDetail.exerciseDetail;
    });
  }

  deleteTeacher() {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Quieres eliminar El ejercicio con id ${this.exerciseDetail.id}?`,
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.exerciseService
            .deleteExercise(this.exerciseDetail.id)
            .subscribe((success) => {
              if (success) this.refreshExercises(this.exerciseService);
            });
        }
      });
  }
}
