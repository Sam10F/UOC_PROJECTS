import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AssignatureService {
  baseUrl = "http://localhost:8000/api/teacherAssignatures";

  constructor(private http: HttpClient) {}

  getAllAssignatures() {
    return this.http.get(this.baseUrl);
  }

  getAssignatureDetail(assignatureId) {
    return this.http.get(`${this.baseUrl}/${assignatureId}`);
  }

  deleteAssignature(assignatureId) {
    return this.http.delete(`${this.baseUrl}/${assignatureId}`);
  }
}
