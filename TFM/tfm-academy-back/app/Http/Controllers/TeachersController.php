<?php

namespace App\Http\Controllers;

use App\Assignatures;
use App\Classrooms;
use App\Students;
use App\User;
use App\Teachers;
use Illuminate\Support\Facades\Auth;

class TeachersController extends Controller
{

  function getAllTeachers() {
    $response = [];
    foreach (Teachers::all() as $teacher) {
      $user = Teachers::find($teacher->id)->user;
      $response[] = (object)[ 
        'id' => $teacher->id,
        'user_id' => $teacher->user_id,
        'email' => $user['email'],
        'name' => $user['name'],
        'assignatures' => Teachers::find($teacher->id)->assignatures
      ];
    }

    return $response;
  }

  function getTeacherDetail($teacherId){
    $response = [];
    try {
      $user = Teachers::find($teacherId)->user;
      foreach ($this->getAllAssignatures($teacherId) as $assignature){
        $response['assignatures'][] = $assignature['name'];
      }
      $response['email'] = $user['email'];
      $response['name'] = $user['name'];
    }catch(\Exception $e){
      return [];
    }

    return $response;
  }

  function deleteTeacher($teacherId){
    $teacher = Teachers::find($teacherId);
    $userToDelete = User::find($teacher['user_id']);
    return $userToDelete->delete();
  }

  function getAllLessons($userId = false){
    $teacherId = ($userId) ? $userId : Auth::id();

    try {
      $assignatures = Teachers::find($teacherId)->assignatures;

      $lessons = [];
      foreach ($assignatures as $assignature) {
        $lessons[$assignature->name] = Assignatures::find($assignature->id)->lessons;
      }

      return $lessons;
    }catch(\Exception $e){
      return [];
    }
  }

  function getAllAssignatures($userId = false){
    $userId = ($userId) ? $userId : Auth::id();

    $response = [];
    foreach (Teachers::find(User::find($userId)->teacher['id'])->assignatures as $assignature) {
      $teachers = Assignatures::find($assignature->id)->teachers;

      $students = [];
      foreach (Assignatures::find($assignature->id)->classrooms as $classroom) { 
        $students = Classrooms::find($classroom->id)->students;
      }

      $response[] = (object)[
        'id' => $assignature->id,
        'name' => $assignature->name,
        'description' => $assignature->description,
        'teachers' => $this->getUserFromRol($teachers),
        'students' => $this->getUserFromRol($students)
      ];
    };

    return $response;
  }

  function getAllClassrooms(){
    $assignatures = Teachers::find(User::find(Auth::id())->teacher['id'])->assignatures;

    $response = [];
    foreach ($assignatures as $assignature) {
      $classrooms = Assignatures::find($assignature->id)->classrooms;
      foreach ($classrooms as $classroom) {
        $response[] = (object)[ 
          'id' => $classroom->id,
          'name' => $classroom->name,
          'asignature' => Assignatures::find($classroom->assignature_id)['name'],
          'students' => $this->getUserFromRol(Classrooms::find($classroom->id)->students)
        ];
      }
    }

    return $response;
  }

  function getAllStudents(){
    // return Teachers::find(User::find(Auth::id())->teacher['id'])->assignatures;
    $students = [];
    foreach ($this->getAllClassrooms() as $classroom) {
      $students = [ ...$students, ...Classrooms::find($classroom->id)->students];
    }

    $students = array_filter($students, function($obj)
    {
        static $idList = array();
        if(in_array($obj->id,$idList)) {
            return false;
        }
        $idList []= $obj->id;
        return true;
    });

    $response = [];
    foreach ($students as $student) {
      $classrooms = Students::find($student->id)->classrooms;

      $assignatures = [];
      foreach ($classrooms as $classroom) {
        $assignatures[] = Classrooms::find($classroom->id)->assignatures;
      }

      $user = User::find($student->user_id);
      $response[] = (object)[ 
        'id' => $student->user_id,
        'email' => $user['email'],
        'name' => $user['name'],
        'assignatures' => $assignatures
      ];
    }

    return $response;
  }

  private function getUserFromRol($rolList) {
    $response = [];

    foreach($rolList as $rol) {
      $response[] = User::find($rol->id);
    }

    return $response;
  }
}
