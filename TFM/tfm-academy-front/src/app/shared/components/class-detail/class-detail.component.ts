import { Component, Input, OnChanges } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { Class } from "../../models/class.model";
import { ClassesService } from "../../services/classes.service";
import { TeachersService } from "../../services/teachers.service";
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component";

@Component({
  selector: "app-class-detail",
  templateUrl: "./class-detail.component.html",
  styleUrls: ["./class-detail.component.scss"],
})
export class ClassDetailComponent {
  @Input() refreshClasses: (args: any) => void;
  classDetail: Class;

  constructor(
    private store: Store<AppState>,
    public dialogo: MatDialog,
    private classesService: ClassesService
  ) {}

  ngOnInit() {
    this.store.select("ClassDetail").subscribe((classDetail) => {
      this.classDetail = classDetail.classDetail;
    });
  }

  deleteClass() {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Quieres eliminar la clase con id ${this.classDetail.id}?`,
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.classesService
            .deleteClass(this.classDetail.id)
            .subscribe((success) => {
              if (success) this.refreshClasses(this.classesService);
            });
        }
      });
  }
}
