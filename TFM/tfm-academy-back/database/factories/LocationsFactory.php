<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Locations;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Locations::class, function (Faker $faker) {
    return [
      'phone' => $faker->phoneNumber,
      'email' => $faker->email,
      'postcode' => $faker->postcode,
      'street' => $faker->streetName,
      'number' => $faker->numberBetween(1, 20),
      'city' => $faker->city,
      'created_at' => now(),
    ];
});
