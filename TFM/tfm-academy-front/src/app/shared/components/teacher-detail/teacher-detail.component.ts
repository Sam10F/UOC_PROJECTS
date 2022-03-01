import { Component, Input, OnChanges } from "@angular/core";
import { Store } from "@ngrx/store";
import { MatDialog } from "@angular/material/dialog";
import { AppState } from "src/app/app.reducers";
import { User } from "../../models/user.model";
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component";
import { TeachersService } from "../../services/teachers.service";

@Component({
  selector: "app-teacher-detail",
  templateUrl: "./teacher-detail.component.html",
  styleUrls: ["./teacher-detail.component.scss"],
})
export class TeacherDetailComponent {
  teacherDetail: User;
  @Input() refreshTeachers: (args: any) => void;

  constructor(
    private store: Store<AppState>,
    public dialogo: MatDialog,
    private teacherService: TeachersService
  ) {}

  ngOnInit() {
    this.store.select("UserDetail").subscribe((userDetail) => {
      this.teacherDetail = userDetail.userDetail;
    });
  }

  deleteTeacher() {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Quieres eliminar al profesor con id ${this.teacherDetail.id}?`,
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.teacherService
            .deleteTeacher(this.teacherDetail.id)
            .subscribe((success) => {
              if (success) this.refreshTeachers(this.teacherService);
            });
        }
      });
  }
}
