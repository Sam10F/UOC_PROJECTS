<?php

namespace App\Http\Controllers;

use App\Exercise_type;

class ExerciseTypeController extends Controller
{
    function getAllExerciseTypes() {
        return Exercise_type::all();
    }

    function deleteExerciseType($exerciseTypeId) {
        $exerciseType = Exercise_type::find($exerciseTypeId);
        return $exerciseType->delete();
    }
}
