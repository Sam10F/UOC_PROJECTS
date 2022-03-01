import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Exercise } from "src/app/shared/models/exercise.model";
import { ExerciseService } from "src/app/shared/services/exercise.service";

@Component({
  selector: "new-app-select-word",
  templateUrl: "./new-select-word.component.html",
  styleUrls: ["./new-select-word.component.css"],
})
export class NewSelectWordComponent implements OnInit {
  public textForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public exerciseService: ExerciseService
  ) {}

  ngOnInit(): void {
    this.textForm = this.fb.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      content: ["aaa [[1, 2]] bbb [[3, 4]]", [Validators.required]],
      type_id: 1,
    });
  }

  saveExercise(exercise: Exercise) {
    this.exerciseService.saveExercise(exercise).subscribe(
      (resp) => {
        console.log("Exercise saved!", resp);
      },
      (err) => {
        console.error("Error ocurred during the exercise save proccess:", err);
      }
    );
  }
}
