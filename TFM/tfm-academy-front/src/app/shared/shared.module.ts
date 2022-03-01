import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListItemComponent } from "./components/user-list-item/user-list-item.component";
import { DashboardViewComponent } from "./components/dashboard-view/dashboard-view.component";
import { ClassesViewComponent } from "./components/classes-view/classes-view.component";
import { ClassListItemComponent } from "./components/classes-list-item/classes-list-item.component";
import { TeacherDetailComponent } from "./components/teacher-detail/teacher-detail.component";
import { ClassDetailComponent } from "./components/class-detail/class-detail.component";
import { AssignatureListItemComponent } from "./components/assignature-list-item/assignature-list-item.component";
import { AssignatureDetailComponent } from "./components/assignature-detail/assignature-detail.component";
import { ExerciseListItemComponent } from "./components/exercise-list-item/exercise-list-item.component";
import { ExerciseDetailComponent } from "./components/exercise-detail/exercise-detail.component";
import { StudentDetailComponent } from "./components/student-detail/student-detail.component";
import { SelectWordComponent } from "./components/Exercises/select-word/select-word.component";
import { TranslateWordComponent } from "./components/Exercises/translate-word/translate-word.component";
import { MaterialModule } from "./material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { NewExerciseViewComponent } from "./components/Exercises/new-exercise-view/new-exercise-view.component";
import { NewSelectWordComponent } from "./components/Exercises/select-word/new/new-select-word.component";
import { NewTranslateWordComponent } from "./components/Exercises/translate-word/new/new-translate-word.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogoConfirmacionComponent } from "./components/dialogo-confirmacion/dialogo-confirmacion.component";

@NgModule({
  declarations: [
    UserListItemComponent,
    DashboardViewComponent,
    ClassesViewComponent,
    ClassListItemComponent,
    TeacherDetailComponent,
    ClassDetailComponent,
    AssignatureListItemComponent,
    AssignatureDetailComponent,
    ExerciseListItemComponent,
    ExerciseDetailComponent,
    StudentDetailComponent,
    SelectWordComponent,
    TranslateWordComponent,
    NewExerciseViewComponent,
    NewSelectWordComponent,
    NewTranslateWordComponent,
    DialogoConfirmacionComponent,
  ],
  exports: [
    UserListItemComponent,
    DashboardViewComponent,
    ClassesViewComponent,
    ClassListItemComponent,
    TeacherDetailComponent,
    ClassDetailComponent,
    AssignatureListItemComponent,
    AssignatureDetailComponent,
    ExerciseListItemComponent,
    ExerciseDetailComponent,
    StudentDetailComponent,
    SelectWordComponent,
    TranslateWordComponent,
    MaterialModule,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
