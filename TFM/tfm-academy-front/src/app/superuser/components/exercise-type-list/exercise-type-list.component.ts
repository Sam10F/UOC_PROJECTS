import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { exerciseTypeDetailUpdate } from "src/app/shared/actions";

@Component({
  selector: "app-exercise-type-list",
  templateUrl: "./exercise-type-list.component.html",
  styleUrls: ["./exercise-type-list.component.scss"],
})
export class ExerciseTypeListComponent implements OnInit {
  @Input() exerciseTypeList: Array<any>;

  exerciseTypeDetail;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select("ExerciseTypeDetail").subscribe((exerciseTypeDetail) => {
      this.exerciseTypeDetail = exerciseTypeDetail.exerciseTypeDetail;
    });
  }

  ngOnChanges(): void {
    if (this.exerciseTypeList && this.exerciseTypeList.length >= 0) {
      this.setExerciseTypeDetail(this.exerciseTypeList[0]);
    }
  }

  setExerciseTypeDetail(exerciseType) {
    this.store.dispatch(exerciseTypeDetailUpdate({ exerciseType }));
  }
}
