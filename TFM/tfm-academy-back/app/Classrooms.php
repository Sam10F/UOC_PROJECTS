<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Classrooms extends Model
{
    public function assignments()
    {
        return $this->hasOne(Assignments::class, 'classroom_id');
    }

    public function assignatures()
    {
        return $this->belongsTo(\App\Assignatures::class, 'assignature_id');
    }

    public function lessons(){
        return $this->hasMany(\App\Lessons::class, 'classroom_id');
    }

    public function students(){
        return $this->belongsToMany(\App\Students::class, 'classroom_student', 'classroom_id', 'student_id');
    }
}
