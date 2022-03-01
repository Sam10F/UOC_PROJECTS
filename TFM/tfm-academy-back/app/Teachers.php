<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Teachers extends Model
{
    public function user(){
        return $this->belongsTo(\App\User::class);
    }

    public function assigment(){
        return $this->hasOne(\App\Assignments::class, 'teacher_id');
    }

    public function assignatures(){
        return $this->belongsToMany(\App\Assignatures::class, 'assignature_teacher', 'teacher_id', 'assignature_id');
    }
}
