<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Exercise_type;
use Faker\Generator as Faker;

$factory->define(Exercise_type::class, function (Faker $faker) {
    return [
        'created_at' => $faker->dateTime('now')
    ];
});
