<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Locations extends Model
{
    public function user(){
        return $this->hasOne(\App\User::class, 'location_id');
    }
}
