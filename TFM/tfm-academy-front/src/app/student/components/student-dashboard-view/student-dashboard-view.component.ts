import { Component, HostBinding, OnInit } from "@angular/core";
import { JwtHelperService } from "../../../shared/login/services/jwt-helper.service";
import { AuthService } from "../../../shared/login/services/auth.service";
import { Router } from "@angular/router";
import { logoutAction } from "../../../shared/login/actions/profile.actions";
import { Store } from "@ngrx/store";
import { AppState } from "../../../app.reducers";
import { ExerciseService } from "../../../shared/services/exercise.service";
import { LessonsService } from "src/app/shared/services/lessons.service";
import { Lesson } from "src/app/shared/models/lessons.model";

@Component({
  selector: "app-student-dashboard-view",
  templateUrl: "./student-dashboard-view.component.html",
  styleUrls: ["./student-dashboard-view.component.scss"],
})
export class StudentDashboardViewComponent implements OnInit {
  @HostBinding("class.full-height-student") fullHeight: boolean = true;

  accessToken: any;
  accessTokenDetails: any;
  loading: boolean;
  lessonList: Array<Lesson>;

  constructor(
    jwtHelper: JwtHelperService,
    public lessonService: LessonsService,
    private authService: AuthService,
    private exercisesService: ExerciseService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.accessToken = localStorage.getItem("access_token");
    this.accessTokenDetails = {
      id: jwtHelper.id(),
      name: jwtHelper.name(),
      email: jwtHelper.email(),
    };
  }

  ngOnInit(): void {
    this.getDashboardData();
    this.lessonService
      .getAllStudentLessons()
      .subscribe((res: Array<Lesson>) => {
        this.lessonList = res;
      });
  }

  getDashboardData() {
    this.exercisesService.getAllExercises().subscribe(
      (res: any) => {
        console.log("res", res);
      },
      (payload: any) => {}
    );
  }

  /**
   * Logout the user and revoke his token
   */
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
