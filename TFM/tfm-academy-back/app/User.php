<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function student(){
        return $this->hasOne(\App\Students::class, 'user_id');
    }

    public function teacher(){
        return $this->hasOne(\App\Teachers::class, 'user_id');
    }

    /**
     * STATIC METHODS
    */
    public static function getTeachers(){
        return self::where('rol_id', 'LIKE', '2.%')->get();
    }

    public static function getStudents(){
        return self::where('rol_id', 'LIKE', '3.%')->get();
    }
}
