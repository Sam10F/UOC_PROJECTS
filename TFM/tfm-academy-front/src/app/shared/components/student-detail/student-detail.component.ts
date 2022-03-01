import { Component, Input, OnChanges } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { User } from "../../models/user.model";
import { StudentsService } from "../../services/students.service";
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component";

@Component({
  selector: "app-student-detail",
  templateUrl: "./student-detail.component.html",
  styleUrls: ["./student-detail.component.scss"],
})
export class StudentDetailComponent {
  @Input() refreshStudents: (args: any) => void;
  studentDetail: User;

  constructor(
    private store: Store<AppState>,
    public dialogo: MatDialog,
    private studentService: StudentsService
  ) {}

  ngOnInit() {
    this.store.select("UserDetail").subscribe((userDetail) => {
      this.studentDetail = userDetail.userDetail;
    });
  }

  deleteStudent() {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Quieres eliminar al Estudiante con id ${this.studentDetail.id}?`,
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.studentService
            .deleteStudent(this.studentDetail.id)
            .subscribe((success) => {
              if (success) this.refreshStudents(this.studentService);
            });
        }
      });
  }
}
