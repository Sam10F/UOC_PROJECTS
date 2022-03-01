<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Classrooms;
use App\Assignatures;
use Faker\Generator as Faker;

$factory->define(Classrooms::class, function (Faker $faker) {
    return [
        'name' => $faker->lexify('English_classroom_???'),
        'assignature_id' => factory(Assignatures::class)->create()
    ];
});
