import { Component, HostBinding, OnInit } from "@angular/core";
import { AssignatureService } from "../../services/assignatures.service";

@Component({
  selector: "app-lessons-view",
  templateUrl: "./lessons-view.component.html",
  styleUrls: ["./lessons-view.component.scss"],
})
export class LessonsViewComponent implements OnInit {
  @HostBinding("class.full-height") fullHeight: boolean = true;

  userSelected;
  assignaturesList = [];
  assignatureDetail;

  constructor(private assignaturesService: AssignatureService) {}

  ngOnInit(): void {
    this.getAllLessons();
  }

  getAllLessons = () => {
    this.assignaturesService.getAllAssignatures().subscribe(
      (res: any) => {
        this.assignaturesList = res;
        console.log("this.assignaturesList", this.assignaturesList);
      },
      (payload: any) => {}
    );
  };

  getUserDetail(user) {
    this.assignatureDetail = 2;
    this.assignaturesService.getAssignatureDetail(user.id).subscribe(
      (res: any) => {
        this.assignatureDetail = res;
        console.log("this.teacherDetail", this.assignatureDetail);
      },
      (payload: any) => {}
    );
  }
}
