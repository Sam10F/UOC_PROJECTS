import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: "app-student-header",
  templateUrl: "./student-header.component.html",
  styleUrls: ["./student-header.component.scss"],
})
export class StudentHeaderComponent implements OnInit {
  user: User;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select("User").subscribe((user) => {
      this.user = user.userLoged;
    });
  }
}
