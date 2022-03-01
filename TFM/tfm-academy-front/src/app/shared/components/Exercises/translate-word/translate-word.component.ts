import { Component, Input, OnInit } from "@angular/core";
import { ExercisePreview } from "./models/exercise-preview";
import { FormGroup, FormArray, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-translate-word",
  templateUrl: "./translate-word.component.html",
  styleUrls: ["./translate-word.component.css"],
})
export class TranslateWordComponent implements OnInit {
  @Input() previewExercise: Array<ExercisePreview> = [];
  @Input() previewMode: Boolean = false;

  public exerciseAnswers: FormGroup;

  public translations: FormArray;
  public result: number;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log("preview: ", this.previewExercise);
    this.loadPreview();
  }

  ngOnChanges(): void {
    if (this.previewMode) {
      this.loadPreview();
    }
  }

  loadPreview() {
    this.exerciseAnswers = this.fb.group({
      translations: this.fb.array(
        this.previewExercise.map((pair) => {
          return this.fb.group({ word: pair.word, translation: "" });
        })
      ),
    });
  }

  checkExercise() {
    this.result = this.previewExercise.length;
    this.exerciseAnswers.value.translations.map((pair) => {
      if (
        this.previewExercise.find((question) => question.word == pair.word)
          .translation != pair.translation
      ) {
        this.result--;
      }
    });
  }

  trackByIndex(index) {
    return index;
  }
}
