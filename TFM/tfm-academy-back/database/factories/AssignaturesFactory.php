<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Assignatures;
use Faker\Generator as Faker;

$factory->define(Assignatures::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->numerify('English_#'),
        'description' => $faker->text(30)
    ];
});
