import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { exerciseDetailUpdate } from "../../actions";

@Component({
  selector: "app-exercise-list-item",
  templateUrl: "./exercise-list-item.component.html",
  styleUrls: ["./exercise-list-item.component.scss"],
})
export class ExerciseListItemComponent implements OnInit {
  @Input() exerciseList: Array<any>;

  exerciseDetail;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select("ExerciseDetail").subscribe((exerciseDetail) => {
      this.exerciseDetail = exerciseDetail.exerciseDetail;
    });
  }

  ngOnChanges(): void {
    if (this.exerciseList && this.exerciseList.length >= 0) {
      this.setExerciseDetail(this.exerciseList[0]);
    }
  }

  setExerciseDetail(exercise) {
    this.store.dispatch(exerciseDetailUpdate({ exercise }));
  }
}
