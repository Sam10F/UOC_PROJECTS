<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Assignature_teacher;
use App\Assignatures;
use App\Teachers;
use Faker\Generator as Faker;

$factory->define(Assignature_teacher::class, function (Faker $faker) {
    $existingRelations = Assignature_teacher::all('assignature_id', 'teacher_id');
    
    $found = true;
    $possibleRelation = [];
    while($found) {
        $possibleRelation = [
            'assignature_id' => $this->faker->randomElement(Assignatures::all())['id'],
            'teacher_id' => $this->faker->randomElement(Teachers::all())['id'],
        ];

        $found = false;
        foreach($existingRelations as $existing) {
            if($existing['assignature_id'] === $possibleRelation['assignature_id'] && $existing['teacher_id'] === $possibleRelation['teacher_id']){
                $found = true;
            }
        }
    }

    return $possibleRelation;
});
