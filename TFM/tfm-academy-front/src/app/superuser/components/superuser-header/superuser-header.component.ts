import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/login/services/auth.service";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { AppState } from "src/app/app.reducers";
import { logoutAction } from "src/app/shared/login/actions/profile.actions";

@Component({
  selector: "app-superuser-header",
  templateUrl: "./superuser-header.component.html",
  styleUrls: ["./superuser-header.component.scss"],
})
export class SuperuserHeaderComponent implements OnInit {
  loading: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.loading = true;
    this.authService.logout().subscribe(() => {
      this.loading = false;

      localStorage.removeItem("access_token");
      localStorage.removeItem("User");
      localStorage.removeItem("Login");

      this.store.dispatch(logoutAction());

      this.router.navigate(["/login"]);
    });
  }
}
