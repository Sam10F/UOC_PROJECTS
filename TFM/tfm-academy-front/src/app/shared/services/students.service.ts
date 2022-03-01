import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StudentsService {
  baseUrl = "http://localhost:8000/api/teacherStudents";

  constructor(private http: HttpClient) {}

  getAllStudents() {
    return this.http.get(this.baseUrl);
  }

  getStudentDetail(studentId) {
    return this.http.get(`${this.baseUrl}/${studentId}`);
  }

  deleteStudent(studentId) {
    return this.http.delete(`${this.baseUrl}/${studentId}`);
  }
}
