<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Students extends Model
{
    public function user(){
        return $this->belongsTo(\App\User::class);
    }

    public function classrooms(){
        return $this->belongsToMany(\App\Classrooms::class, 'classroom_student', 'student_id', 'classroom_id');
    }
}
