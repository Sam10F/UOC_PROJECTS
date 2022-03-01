<?php

namespace App\Http\Controllers;

use App\Assignatures;
use App\Classrooms;
use App\Lessons;
use Illuminate\Support\Facades\Auth;

class LessonsController extends Controller
{
    function getAllLessons(){
        // return Lessons::select('lessons.id')
        //     ->join('classroom as a2e', 'exercises.id', '=', 'a2e.exercise_id')
        //     ->join('assignments as a', 'a2e.assignment_id', '=', 'a.id')
        //     ->join('classrooms as c', 'a.classroom_id', '=', 'c.id')
        //     ->join('assignatures as as', 'c.assignature_id', '=', 'as.id')
        //     ->where('a.teacher_id', '=', Auth::id())
        //     ->get();

        return Lessons::find(1)->classrooms;
    }

    function getAllTeacherLessons() {
        $teachersController = new TeachersController();
        $teacherClassrooms = $teachersController->getAllClassrooms();

        $response = [];
        foreach($teacherClassrooms as $classroom){
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
}
