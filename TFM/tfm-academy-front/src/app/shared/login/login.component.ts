import { Component, HostBinding, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.reducers";
import { AuthService } from "./services/auth.service";
import { JwtHelperService } from "./services/jwt-helper.service";
import { Credentials } from "../models/credentials.model";
import { User } from "../models/user.model";
import { login, loginFailure, loginSuccess } from "./actions";
import { getLoginUser, getLoginUserSuccess } from "./actions/profile.actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  @HostBinding("class.full-height-login") fullHeight: boolean = true;

  // Variables
  form: FormGroup;
  loading: boolean;
  errors: boolean;
  credentials: Credentials;
  jwtHelper: JwtHelperService;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    jwtHelper: JwtHelperService,
    private store: Store<AppState>
  ) {
    this.jwtHelper = jwtHelper;
    this.form = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  login(): void {
    this.loading = true;
    this.errors = false;
    const credentials = this.getCredentials();
    this.store.dispatch(login({ credentials }));
    this.store.dispatch(getLoginUser({ credentials }));
    this.authService.login(credentials.email, credentials.password).subscribe(
      (res: any) => {
        localStorage.setItem("access_token", res.access_token);
        this.loading = false;
        this.store.dispatch(loginSuccess({ credentials }));
        this.router.navigate(["/"]);

        console.log("res:", this.getLoggedUser());
        const user = this.getLoggedUser();
        this.store.dispatch(getLoginUserSuccess({ user }));
      },
      (payload: any) => {
        this.loading = false;
        this.errors = true;
        this.store.dispatch(loginFailure({ payload }));
      }
    );
  }

  getCredentials(): Credentials {
    return {
      email: this.controls.email.value,
      password: this.controls.password.value,
    };
  }

  getLoggedUser(): User {
    return {
      id: this.jwtHelper.id(),
      name: this.jwtHelper.name(),
      surname: this.jwtHelper.surname(),
      rolId: this.jwtHelper.rol_id(),
      email: this.jwtHelper.email(),
    };
  }

  /**
   * Getter for the form controls
   */
  get controls() {
    return this.form.controls;
  }
}
