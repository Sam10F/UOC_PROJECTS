<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Classroom_student;
use App\Classrooms;
use App\Students;
use Faker\Generator as Faker;

$factory->define(Classroom_student::class, function (Faker $faker) {
    $existingRelations = Classroom_student::all('classroom_id', 'student_id');
    
    $found = true;
    $possibleRelation = [];
    while($found) {
        $possibleRelation = [
            'classroom_id' => $this->faker->randomElement(Classrooms::all())['id'],
            'student_id' => $this->faker->randomElement(Students::all())['id'],
        ];

        $found = false;
        foreach($existingRelations as $existing) {
            if($existing['classroom_id'] === $possibleRelation['classroom_id'] && $existing['student_id'] === $possibleRelation['student_id']){
                $found = true;
            }
        }
    }

    return $possibleRelation;
});
