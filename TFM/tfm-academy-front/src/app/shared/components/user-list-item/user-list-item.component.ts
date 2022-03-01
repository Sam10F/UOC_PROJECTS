import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { userDetailUpdate } from "../../actions";

@Component({
  selector: "app-user-list-item",
  templateUrl: "./user-list-item.component.html",
  styleUrls: ["./user-list-item.component.scss"],
})
export class UserListItemComponent implements OnInit {
  @Input() userList: Array<any>;

  userDetail;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select("UserDetail").subscribe((userDetail) => {
      this.userDetail = userDetail.userDetail;
    });
  }

  ngOnChanges(): void {
    if (this.userList && this.userList.length >= 0) {
      this.setUserDetail(this.userList[0]);
    }
  }

  setUserDetail(user) {
    this.store.dispatch(userDetailUpdate({ user }));
  }
}
