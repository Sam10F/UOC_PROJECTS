import { Component, HostBinding, OnInit } from "@angular/core";
import { JwtHelperService } from "../../login/services/jwt-helper.service";
import { ExerciseService } from "../../../shared/services/exercise.service";
import { Lesson } from "../../models/lessons.model";
import { LessonsService } from "../../services/lessons.service";

@Component({
  selector: "app-dashboard-view",
  templateUrl: "./dashboard-view.component.html",
  styleUrls: ["./dashboard-view.component.scss"],
})
export class DashboardViewComponent implements OnInit {
  @HostBinding("class.full-height") fullHeight: boolean = true;

  // Variables
  accessToken: any;
  accessTokenDetails: any;
  loading: boolean;
  lessonList: Array<Lesson>;

  constructor(
    jwtHelper: JwtHelperService,
    public lessonService: LessonsService,
    private exercisesService: ExerciseService
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
      .getAllTeacherLessons()
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
}
