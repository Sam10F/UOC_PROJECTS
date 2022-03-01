import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ExerciseTypeDetailComponent } from "./components/exercise-type-detail/exercise-type-detail.component";
import { TeachersViewComponent } from "./components/teachers-view/teachers-view.component";
import { ExerciseTypesViewComponent } from "./components/exercise-types-view/exercise-types-view.component";
import { ExerciseTypeListComponent } from "./components/exercise-type-list/exercise-type-list.component";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    TeachersViewComponent,
    ExerciseTypesViewComponent,
    ExerciseTypeListComponent,
    ExerciseTypeDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class SuperuserModule {}
