<?php

namespace App\Http\Controllers;

use App\Classrooms;
use App\Students;
use App\User;
use Illuminate\Support\Facades\Auth;

class StudentsController extends Controller
{
    public function getAllStudents(){
        return Students::all();
    }

    function getAllLessons(){
      $classrooms = Students::find(Auth::id())->classrooms;
  
      $response = [];
      foreach ($classrooms as $classroom) {
        foreach(Classrooms::find($classroom->id)->lessons as $lesson){
          $response[] = (object)[
              'id' => $lesson->id,
              'assignature_name' => Classrooms::find($classroom->id)->assignatures['name'],
              'duration_string' => $lesson->start_datetime . ' - ' . date('H:i:s', strtotime( $lesson->start_datetime . " +2 hours" ))
          ];
        }
      }
      return $response;
    }

    function deleteStudent($studentId) {
      $student = Students::find($studentId);
      $userToDelete = User::find($student['user_id']);
      return $userToDelete->delete();
    }
}