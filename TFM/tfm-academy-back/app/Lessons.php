<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lessons extends Model
{
    public function classrooms()
    {
        return $this->belongsTo(Classrooms::class, 'classroom_id');
    }
}
