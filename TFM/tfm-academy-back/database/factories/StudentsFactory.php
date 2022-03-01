<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Students;
use Faker\Generator as Faker;

$factory->define(Students::class, function (Faker $faker) {
    return [
        'user_id' => factory(\App\User::class)->create(['rol_id' => '3.00']),
        'created_at' => $faker->dateTime('now')
    ];
});
