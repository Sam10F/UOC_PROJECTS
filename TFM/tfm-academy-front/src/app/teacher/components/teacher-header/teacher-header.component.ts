import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { AuthService } from "src/app/shared/login/services/auth.service";
import { logoutAction } from "src/app/shared/login/actions/profile.actions";

@Component({
  selector: "app-teacher-header",
  templateUrl: "./teacher-header.component.html",
  styleUrls: ["./teacher-header.component.scss"],
})
export class TeacherHeaderComponent implements OnInit {
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
