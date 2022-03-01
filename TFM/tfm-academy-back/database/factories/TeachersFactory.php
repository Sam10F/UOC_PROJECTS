<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Teachers;
use App\User;
use Faker\Generator as Faker;

$factory->define(Teachers::class, function (Faker $faker) {
    $superUser = User::all()->where('rol_id', '1');    

    return [
        'user_id' => factory(\App\User::class)->create(['rol_id' => (count($superUser) == 0) ? '1.00' : '2.00']),
        'created_at' => $faker->dateTime('now')
    ];
});
