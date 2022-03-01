import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "../../login/services/auth-guard.service";
import { SharedModule } from "../../shared.module";
import { StudentDashboardViewComponent } from "../../../student/components/student-dashboard-view/student-dashboard-view.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  declarations: [HomeComponent, StudentDashboardViewComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
