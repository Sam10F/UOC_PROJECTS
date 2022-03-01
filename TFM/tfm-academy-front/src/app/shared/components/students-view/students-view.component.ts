import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnInit,
} from "@angular/core";
import { StudentsService } from "../../services/students.service";

@Component({
  selector: "app-students-view",
  templateUrl: "./students-view.component.html",
  styleUrls: ["./students-view.component.scss"],
})
export class StudentsViewComponent implements OnInit {
  @HostBinding("class.full-height") fullHeight: boolean = true;

  userSelected;
  studentList = [];
  studentDetail;

  constructor(
    private studentsService: StudentsService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents = () => {
    this.studentsService.getAllStudents().subscribe(
      (res: any) => {
        this.studentList = res;
        console.log("this.studentList", this.studentList);
        this.ref.detectChanges();
      },
      (payload: any) => {}
    );
  };
}
