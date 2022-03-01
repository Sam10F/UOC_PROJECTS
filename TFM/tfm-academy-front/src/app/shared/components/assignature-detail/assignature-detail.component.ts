import { Component, Input, OnChanges } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { Assignature } from "../../models/assignature.model";
import { AssignatureService } from "../../services/assignatures.service";
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component";

@Component({
  selector: "app-assignature-detail",
  templateUrl: "./assignature-detail.component.html",
  styleUrls: ["./assignature-detail.component.scss"],
})
export class AssignatureDetailComponent {
  @Input() refreshAssignatures: (args: any) => void;
  assignatureDetail: Assignature;

  constructor(
    private store: Store<AppState>,
    public dialogo: MatDialog,
    private assignatureService: AssignatureService
  ) {}

  ngOnInit() {
    this.store.select("AssignatureDetail").subscribe((assignatureDetail) => {
      this.assignatureDetail = assignatureDetail.assignatureDetail;
    });
  }

  deleteAssignature() {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Quieres eliminar la Asignatura con id ${this.assignatureDetail.id}?`,
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.assignatureService
            .deleteAssignature(this.assignatureDetail.id)
            .subscribe((success) => {
              if (success) this.refreshAssignatures(this.assignatureService);
            });
        }
      });
  }
}
