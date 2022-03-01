import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../../app.reducers";
import { User } from "../../models/user.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  // Variables
  accessToken: any;
  accessTokenDetails: any;
  loading: boolean;

  user: User;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select("User").subscribe((user) => {
      this.user = user.userLoged;
    });
  }
}
