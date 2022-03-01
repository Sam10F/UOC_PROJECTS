<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

Route::middleware('auth:api')->get('/token/revoke', function (Request $request) {
    DB::table('oauth_access_tokens')
        ->where('user_id', $request->user()->id)
        ->update([
            'revoked' => true
        ]);
    return response()->json('DONE');
});

Route::group(['middleware' => ['auth:api']], function () {
    // EXERCISES
    Route::get('exercises', 'ExercisesController@getAllExercises');
    Route::get('exercise/{exerciseId}', 'ExercisesController@getExerciseById');
    Route::post('exercises/new', 'ExercisesController@saveExercise');
    Route::delete('exercises/{exerciseId}', 'ExercisesController@deleteExercise');
    Route::delete('exerciseTypes/{exerciseTypeId}', 'ExerciseTypeController@deleteExerciseType');



    // LESSONS
    Route::get('teacherLessons', 'LessonsController@getAllTeacherLessons');
    Route::get('studentLessons', 'StudentsController@getAllLessons');

    //SUPERUSERS
    Route::get('teachers', 'TeachersController@getAllTeachers');
    Route::get('teachers/{teacherId}', 'TeachersController@getTeacherDetail');
    Route::get('exerciseTypes', 'ExerciseTypeController@getAllExerciseTypes');
    Route::delete('teachers/{teacherId}', 'TeachersController@deleteTeacher');

    // TEACHERS
    Route::get('teacherStudents', 'TeachersController@getAllStudents');
    Route::get('teacherClassrooms', 'TeachersController@getAllClassrooms');
    Route::get('teacherAssignatures', 'TeachersController@getAllAssignatures');
    Route::delete('teacherStudents/{studentId}', 'StudentsController@deleteStudent');
    Route::delete('teacherAssignatures/{assignatureId}', 'AssignaturesController@deleteAssignature');
    Route::delete('teacherClassrooms/{classId}', 'ClassroomsController@deleteClassroom');


    // STUDENTS
    Route::get('studentLessons', 'StudentsController@getAllLessons');
});

