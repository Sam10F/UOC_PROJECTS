import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Exercise } from "../models/exercise.model";

@Injectable({
  providedIn: "root",
})
export class ExerciseService {
  baseUrl = "http://localhost:8000/api/exercises";
  baseUrlTypes = "http://localhost:8000/api/exerciseTypes";

  constructor(private http: HttpClient, private router: Router) {}

  getAllExercises() {
    return this.http.get(this.baseUrl);
  }

  deleteExercise(exerciseId) {
    return this.http.delete(`${this.baseUrl}/${exerciseId}`);
  }

  getAllExercisesTypes() {
    return this.http.get(this.baseUrlTypes);
  }

  deleteExerciseType(exerciseTypeId) {
    return this.http.delete(`${this.baseUrlTypes}/${exerciseTypeId}`);
  }

  private correctOptionMark: string = "(*)";
  private asnswerGap: string = "______";

  getCorrectOptionMark(): string {
    return this.correctOptionMark;
  }

  getAnswerGap(): string {
    return this.asnswerGap;
  }

  getExerciseById(exerciseId): Observable<Exercise[]> {
    return this.http.get<Exercise[]>("/api/exercise/" + exerciseId);
  }

  public stringToJson(string) {
    return JSON.parse(string);
  }

  saveExercise(exercise: Exercise): Observable<any> {
    return this.http.post(`${this.baseUrl}/new`, exercise).pipe(
      map((insertedId: BigInteger) => {
        this.router.navigateByUrl("/exercises");
      })
    );
  }
}
