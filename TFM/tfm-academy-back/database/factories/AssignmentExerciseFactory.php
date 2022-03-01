<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Assignment_Exercise;
use \App\Assignments;
use \App\Exercises;
use Faker\Generator as Faker;

$factory->define(Assignment_Exercise::class, function (Faker $faker) {
    return [
        'assignment_id' => factory(Assignments::class)->create()
    ];
});
