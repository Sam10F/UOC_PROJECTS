import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnInit,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { ExerciseService } from "src/app/shared/services/exercise.service";

@Component({
  selector: "app-exercise-types-view",
  templateUrl: "./exercise-types-view.component.html",
  styleUrls: ["./exercise-types-view.component.scss"],
})
export class ExerciseTypesViewComponent implements OnInit {
  @HostBinding("class.full-height") fullHeight: boolean = true;

  userSelected;
  exerciseTypeList = [];
  exerciseTypeDetail;

  constructor(private exerciseTypesService: ExerciseService) {}

  ngOnInit(): void {
    this.getAllExerciseTypes();
  }

  getAllExerciseTypes = () => {
    this.exerciseTypesService.getAllExercisesTypes().subscribe(
      (res: any) => {
        this.exerciseTypeList = res;
        console.log("this.exerciseTypeList", this.exerciseTypeList);
      },
      (payload: any) => {}
    );
  };
}
