<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Assignments;
use Faker\Generator as Faker;

$factory->define(Assignments::class, function (Faker $faker) {
    return [
        'chapter_id' => $faker->randomDigitNotNull,
        'teacher_id' => factory(\App\Teachers::class)->create(),
        'classroom_id' => \App\Classrooms::latest()->first(),
        'title' => $faker->text(20),
        'description' => $faker->text(60),
        'expires_at' => date('Y-m-d H:i:s', strtotime('+1 months')),
        'created_at' => $faker->dateTime('now')
    ];
});
