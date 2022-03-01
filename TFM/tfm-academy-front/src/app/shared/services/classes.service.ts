import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ClassesService {
  baseUrl = "http://localhost:8000/api/teacherClassrooms";

  constructor(private http: HttpClient) {}

  getAllClassrooms() {
    return this.http.get(this.baseUrl);
  }

  getClassroomDetail(classroomId) {
    return this.http.get(`${this.baseUrl}/${classroomId}`);
  }

  deleteClass(classId) {
    return this.http.delete(`${this.baseUrl}/${classId}`);
  }
}
