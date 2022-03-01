import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { ExerciseService } from "src/app/shared/services/exercise.service";

@Component({
  selector: "new-app-translate-word",
  templateUrl: "./new-translate-word.component.html",
  styleUrls: ["./new-translate-word.component.css"],
})
export class NewTranslateWordComponent implements OnInit {
  public exerciseForm: FormGroup;
  public translations: FormArray;

  constructor(
    private fb: FormBuilder,
    private exerciseService: ExerciseService
  ) {}

  private createTranslation(word, value): FormGroup {
    return this.fb.group({
      word: word,
      translation: value,
    });
  }

  ngOnInit(): void {
    this.exerciseForm = this.fb.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      content: this.fb.array([this.createTranslation("cat", "gato")]),
      type_id: 2,
    });
  }

  public addTranslation(word, value) {
    this.translations = this.exerciseForm.get("content") as FormArray;
    this.translations.push(this.createTranslation(word, value));
  }

  saveExercise(exercise) {
    exercise.content = JSON.stringify(exercise.content);
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
