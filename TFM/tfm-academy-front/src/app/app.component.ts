import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./app.reducers";
import { User } from "./shared/models/user.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Academy Front";

  user: User;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select("User").subscribe((user) => {
      this.user = user.userLoged;
    });
  }

  getHeaderClass() {
    switch (Number(this.user.rolId)) {
      case 1:
        return "SuperUser";

      case 2:
        return "Teacher";

      case 3:
        return "Student";
    }
  }
}
