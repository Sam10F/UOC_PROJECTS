import { Component, HostBinding, OnInit } from "@angular/core";

@Component({
  selector: "app-new-exercise-view",
  templateUrl: "./new-exercise-view.component.html",
  styleUrls: ["./new-exercise-view.component.scss"],
})
export class NewExerciseViewComponent implements OnInit {
  @HostBinding("class.full-height") fullHeight: boolean = true;
  exerciseToCreate = "selectWord";

  constructor() {}

  ngOnInit(): void {}

  setExerciseToCreate(exercise) {
    this.exerciseToCreate = exercise;
  }
}
