import { Component, HostBinding, OnInit } from "@angular/core";
import { ExerciseService } from "../../services/exercise.service";

@Component({
  selector: "app-exercises-view",
  templateUrl: "./exercises-view.component.html",
  styleUrls: ["./exercises-view.component.scss"],
})
export class ExercisesViewComponent implements OnInit {
  @HostBinding("class.full-height") fullHeight: boolean = true;

  userSelected;
  exerciseList = [];

  constructor(private assignaturesService: ExerciseService) {}

  ngOnInit(): void {
    this.getAllExercises();
  }

  getAllExercises = () => {
    this.assignaturesService.getAllExercises().subscribe(
      (res: any) => {
        this.exerciseList = res;
        console.log("this.exerciseList", this.exerciseList);
      },
      (payload: any) => {}
    );
  };
}
