<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Privileges extends Model
{
    public static function getPrivileges($rol_id){
        return Privileges::select(
            ['students', 'teachers', 'assignatures', 'exercise_types', 'exercises']
        )->where('rol_id', $rol_id)->get();
    }
}
