<?php

namespace App\Http\Controllers;

use App\Classrooms;
use Illuminate\Http\Request;

class ClassroomsController extends Controller
{
    function deleteClassroom($classId) {
        $class = Classrooms::find($classId);
        return $class->delete();
    }
}
