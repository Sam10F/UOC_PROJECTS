<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Exercises;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Date;

$factory->define(Exercises::class, function (Faker $faker) {
    return [
        'title' => "Test Exercise title",
        'expiration_date' => $faker->dateTimeThisMonth()->format('Y-m-d H:i:s'),
        'description' => "Test Exercise description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru ",
        'content' => 'Aquí puedes [[acceder, mirar, escribir, pensar]] a una serie de textos en español que te ayudarán a ejercitar y mejorar tus [[recursos, deberes, compañera, estudio]] de lectura y comprensión.
                        Han sido redactados por profesores de larga trayectoria en la enseñanza del idioma y son de gran [[utilidad, aprendizaje, desarrollor, mutualiadad]] para alumnos de los niveles principiante A1, elemental A2 e intermedio B1.
                        Cada lectura concluye con 5 preguntas de opción múltiple [[destinadas, catalogadas, revertidas, desarrolladas]] a evaluar la comprensión lograda. Gracias a ellos reforzarás tu vocabulario, mejorarás tu gramática y reconocerás expresiones propias del español. Son gratis, diseñados por nivel de complejidad y pueden [[imprimirse, compararse, leerse, mirarse]].',
    ];
});
