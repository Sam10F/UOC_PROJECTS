<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Assignments extends Model
{
    public function classrooms(){
        return $this->belongsTo(\App\Classrooms::class, 'classroom_id');
    }

    public function teachers(){
        return $this->belongsTo(\App\Teachers::class, 'teacher_id');
    }
}
