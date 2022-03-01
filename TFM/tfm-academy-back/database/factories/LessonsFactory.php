<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Lessons;
use App\Classrooms;
use Faker\Generator as Faker;

$factory->define(Lessons::class, function (Faker $faker) {
    return [
        'classroom_id' => $this->faker->randomElement(Classrooms::all())['id'],
        'start_datetime' => $faker->dateTimeThisMonth()->format('Y-m-d H'),
        'duration' => $this->faker->randomElement(['01:00:00', '02:00:00', '03:00:00'])
    ];
});
