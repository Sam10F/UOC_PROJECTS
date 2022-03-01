import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { ExerciseService } from "src/app/shared/services/exercise.service";
import { ExercisePreview } from "./models/exercise-preview";

@Component({
  selector: "app-select-word",
  templateUrl: "./select-word.component.html",
  styleUrls: ["./select-word.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class SelectWordComponent implements OnInit {
  // public previewObj: ExercisePreview;

  @Input() previewObj: String;

  public correctAnswers: Array<String> = [];
  public selectedAnswers: Array<String> = [];
  public exercisePreview: ExercisePreview;

  public finalResult: String = "";

  constructor(public exerciseService: ExerciseService) {}

  public initializePreviewObject() {
    this.exercisePreview = { text: "", options: [] };
  }

  ngOnInit(): void {
    this.loadPreview(this.previewObj);
  }

  ngOnChanges(): void {
    this.finalResult = "";
    this.loadPreview(this.previewObj);
  }

  highlightSpace(className) {
    let el = document.getElementsByClassName(className)[0];
    el.classList.add("hovering");
  }

  disgraceSpace(className) {
    let el = document.getElementsByClassName(className)[0];
    el.classList.remove("hovering");
  }

  selectOption(className, option) {
    let el = document.getElementsByClassName(className)[0];
    const groupNo = className.substring(
      className.indexOf("-") + 1,
      className.length
    );

    el.innerHTML = `${groupNo}.${option}`;
    this.selectedAnswers[groupNo - 1] = option;

    el.classList.add("filled");
  }

  loadPreview(textForm) {
    this.exercisePreview = {
      text: this.getText(textForm),
      options: this.getOptions(textForm),
    };
    this.setCorrectAnswers();
  }

  private setCorrectAnswers() {
    this.correctAnswers = [];
    this.exercisePreview.options = this.exercisePreview.options.map((group) => {
      return group.map((option) => {
        if (option.includes(this.exerciseService.getCorrectOptionMark())) {
          let opt = option.replace(
            this.exerciseService.getCorrectOptionMark(),
            ""
          );
          this.correctAnswers.push(opt);
          return opt;
        } else {
          return option;
        }
      });
    });
  }

  private getText(text): String {
    const stringToReplace = this.exerciseService.getAnswerGap();

    text = text
      .replace(/\[([^\]\]]*)\]\]/g, stringToReplace)
      .replace(/\n\r?/g, "<br />")
      .replace("\t", "");
    let replaceIndex = 0;
    let index = 0;
    let result = "";
    const indexOfSpaces = this.getIndicesOf(stringToReplace, text, false);
    if (indexOfSpaces.length > 0) {
      return indexOfSpaces
        .map((spaceIndex) => {
          result = `${text.slice(replaceIndex, spaceIndex)} 
          <span class="space group-${++index}">
            ${index}.${text.slice(
            spaceIndex,
            spaceIndex + stringToReplace.length
          )}
          </span>`;
          replaceIndex = spaceIndex + stringToReplace.length;

          if (index === indexOfSpaces.length) {
            result += text.slice(replaceIndex, text.length);
          }

          return result;
        })
        .join("");
    } else {
      return text;
    }
  }

  private getOptions(text): Array<Array<String>> {
    if (text.match(/\[([^\]\]]*)\]\]/g)) {
      return text.match(/\[([^\]\]]*)\]\]/g).map((optGroup) => {
        let result = optGroup
          .replace(/["'\[\]]/g, "")
          .replace(" ", "")
          .split(",");
        result[0] = this.exerciseService.getCorrectOptionMark() + result[0];
        return result.sort(() => Math.random() - 0.5);
      });
    } else {
      return [];
    }
  }

  private getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
      return [];
    }
    var startIndex = 0,
      index,
      indices = [];
    if (!caseSensitive) {
      str = str.toLowerCase();
      searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
    }
    return indices;
  }

  checkExercise() {
    let totalScore = this.correctAnswers.length;

    this.correctAnswers.map((answer, index) => {
      if (this.selectedAnswers[index] !== answer) {
        totalScore--;
      }
    });

    this.finalResult = `${totalScore}/${this.correctAnswers.length}`;
  }
}
