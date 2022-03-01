import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClassesViewComponent } from "./shared/components/classes-view/classes-view.component";
import { ExercisesViewComponent } from "./shared/components/exercises-view/exercises-view.component";
import { NewExerciseViewComponent } from "./shared/components/Exercises/new-exercise-view/new-exercise-view.component";
import { LessonsViewComponent } from "./shared/components/lessons-view/lessons-view.component";
import { StudentsViewComponent } from "./shared/components/students-view/students-view.component";
import { SharedModule } from "./shared/shared.module";
import { ExerciseTypesViewComponent } from "./superuser/components/exercise-types-view/exercise-types-view.component";
import { TeachersViewComponent } from "./superuser/components/teachers-view/teachers-view.component";
import { SuperuserModule } from "./superuser/superuser.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./shared/components/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./shared/login/login.module").then((m) => m.LoginModule),
  },
  { path: "teachers", component: TeachersViewComponent },
  { path: "exercise-types", component: ExerciseTypesViewComponent },
  { path: "students", component: StudentsViewComponent },
  { path: "lessons", component: LessonsViewComponent },
  { path: "classes", component: ClassesViewComponent },
  { path: "exercises", component: ExercisesViewComponent },
  { path: "newExercise", component: NewExerciseViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SuperuserModule, SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
