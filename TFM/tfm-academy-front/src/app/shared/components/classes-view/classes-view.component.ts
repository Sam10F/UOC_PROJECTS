import { Component, HostBinding, OnInit } from "@angular/core";
import { ClassesService } from "../../services/classes.service";

@Component({
  selector: "app-classes-view",
  templateUrl: "./classes-view.component.html",
  styleUrls: ["./classes-view.component.scss"],
})
export class ClassesViewComponent implements OnInit {
  @HostBinding("class.full-height") fullHeight: boolean = true;

  userSelected;
  classList = [];
  classDetail;

  constructor(private classService: ClassesService) {}

  ngOnInit(): void {
    this.getAllClasses();
  }

  getAllClasses = () => {
    this.classService.getAllClassrooms().subscribe(
      (res: any) => {
        this.classList = res;
        console.log("this.classList", this.classList);
      },
      (payload: any) => {}
    );
  };

  getUserDetail(teacherClass) {
    this.classDetail = 2;
    this.classService.getClassroomDetail(teacherClass.id).subscribe(
      (res: any) => {
        this.classDetail = res;
        console.log("this.teacherDetail", this.classDetail);
      },
      (payload: any) => {}
    );
  }
}
