import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { classDetailUpdate } from "../../actions";
import { Class } from "../../models/class.model";

@Component({
  selector: "app-class-list-item",
  templateUrl: "./classes-list-item.component.html",
  styleUrls: ["./classes-list-item.component.scss"],
})
export class ClassListItemComponent implements OnInit {
  @Input() classList: Array<Class>;

  classDetail;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select("ClassDetail").subscribe((classDetail) => {
      this.classDetail = classDetail.classDetail;
    });
  }

  ngOnChanges(): void {
    if (this.classList && this.classList.length >= 0) {
      this.setClassDetail(this.classList[0]);
    }
  }

  setClassDetail(teacherClass) {
    this.store.dispatch(classDetailUpdate({ teacherClass }));
  }
}
