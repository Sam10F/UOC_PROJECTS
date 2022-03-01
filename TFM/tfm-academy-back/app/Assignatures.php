<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Assignatures extends Model
{
  public function teachers(){
    return $this->belongsToMany(\App\Teachers::class, 'assignature_teacher', 'assignature_id', 'teacher_id');
  }

  public function classrooms(){
    return $this->hasMany(\App\Classrooms::class, 'assignature_id');
  }

  public function lessons(){
    return $this->hasManyThrough(\App\Lessons::class, \App\Classrooms::class, 'assignature_id', 'classroom_id');
  }
}
