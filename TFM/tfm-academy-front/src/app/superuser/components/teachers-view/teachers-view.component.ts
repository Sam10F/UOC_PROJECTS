import { tick } from "@angular/core/testing/testing";
import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnInit,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { TeachersService } from "src/app/shared/services/teachers.service";

@Component({
  selector: "app-teachers-view",
  templateUrl: "./teachers-view.component.html",
  styleUrls: ["./teachers-view.component.scss"],
})
export class TeachersViewComponent implements OnInit {
  @HostBinding("class.full-height") fullHeight: boolean = true;

  userSelected;
  teacherList = [];
  teacherDetail;
  user;

  constructor(
    public teachersService: TeachersService,
    private store: Store<AppState>,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllTeachers(this.teachersService);
    this.getUserFromStore();
  }

  getAllTeachers = (teachersService) => {
    teachersService.getAllTeachers().subscribe((res: any) => {
      this.teacherList = res.filter((user) => user.user_id !== this.user.id);
      this.ref.detectChanges();
    });
  };

  getUserDetail(user) {
    this.teacherDetail = 2;
    this.teachersService.getTeacherDetail(user.id).subscribe(
      (res: any) => {
        this.teacherDetail = res;
      },
      (payload: any) => {}
    );
  }

  getUserFromStore() {
    this.store.select("User").subscribe((user) => {
      this.user = user.userLoged;
    });
  }
}
