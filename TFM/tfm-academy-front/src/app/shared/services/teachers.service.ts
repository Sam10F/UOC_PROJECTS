import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TeachersService {
  baseUrl = "http://localhost:8000/api/teachers";

  constructor(private http: HttpClient) {}

  getAllTeachers() {
    return this.http.get(this.baseUrl);
  }

  getTeacherDetail(teacherId) {
    return this.http.get(`${this.baseUrl}/${teacherId}`);
  }

  deleteTeacher(teacherId) {
    return this.http.delete(`${this.baseUrl}/${teacherId}`);
  }
}
