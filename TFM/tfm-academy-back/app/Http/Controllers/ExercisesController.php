<?php

namespace App\Http\Controllers;

use App\Exercises;
use Illuminate\Support\Facades\Auth;

class ExercisesController extends Controller
{

    // function getAllExercises(){
    //     $userId = Auth::id();
    //     return Exercises::select('exercises.id', 'exercises.title', 'as.name as assignature_name')
    //         ->join('assignment_exercise as a2e', 'exercises.id', '=', 'a2e.exercise_id')
    //         ->join('assignments as a', 'a2e.assignment_id', '=', 'a.id')
    //         ->join('classrooms as c', 'a.classroom_id', '=', 'c.id')
    //         ->join('assignatures as as', 'c.assignature_id', '=', 'as.id')
    //         ->where('a.teacher_id', '=', $userId)
    //         ->get();
    // }

    function getAllExercises(){ 
        return Exercises::all();
    }


    function getExerciseById($exerciseId){
        return Exercises::where('id', $exerciseId)->get();
    }

    function saveExercise(){

        $exercise = new Exercises();

        $exercise->title = request('title');
        $exercise->type_id = request('type_id');
        $exercise->description = request('description');
        $exercise->content = request('content');
        $exercise->expiration_date = date("Y-m-d", strtotime("+1 week"));


        $exercise->save();
        return $exercise->id;
    }

    function deleteExercise($exerciseId) {
        $exercise = Exercises::find($exerciseId);
        return $exercise->delete();
    }
}
