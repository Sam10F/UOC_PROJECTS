import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { assignatureDetailUpdate } from "../../actions";

@Component({
  selector: "app-assignature-list-item",
  templateUrl: "./assignature-list-item.component.html",
  styleUrls: ["./assignature-list-item.component.scss"],
})
export class AssignatureListItemComponent implements OnInit {
  @Input() assignatureList: Array<any>;

  assignatureDetail;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select("AssignatureDetail").subscribe((assignatureDetail) => {
      this.assignatureDetail = assignatureDetail.assignatureDetail;
    });
  }

  ngOnChanges(): void {
    if (this.assignatureList && this.assignatureList.length >= 0) {
      this.setAssignatureDetail(this.assignatureList[0]);
    }
  }

  setAssignatureDetail(assignature) {
    this.store.dispatch(assignatureDetailUpdate({ assignature }));
  }
}
