import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LessonsService {
  baseUrlTeacher = "http://localhost:8000/api/teacherLessons";
  baseUrlStudent = "http://localhost:8000/api/studentLessons";

  constructor(private http: HttpClient) {}

  getAllTeacherLessons() {
    return this.http.get(this.baseUrlTeacher);
  }

  getAllStudentLessons() {
    return this.http.get(this.baseUrlStudent);
  }
}
