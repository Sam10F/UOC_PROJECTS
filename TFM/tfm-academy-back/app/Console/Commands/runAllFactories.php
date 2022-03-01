<?php

namespace App\Console\Commands;

use App\Assignment_Exercise;
use Illuminate\Console\Command;
use \App\Exercises;

class runAllFactories extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'factories:all';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }


    function getExerciseType1() {
        return [
                'type_id' => factory(\App\Exercise_type::class)->create([
                    'title' => 'Select words',
                    'description' => 'Fill the gaps that you will find in the exercise with the options given'
                ]),
                'title' => "Select words 1",
                'description' => "Fill the gap with the correct word",
                'content' => 'Aquí puedes [[acceder, mirar, escribir, pensar]] a una serie de textos en español que te ayudarán a ejercitar y mejorar tus [[recursos, deberes, compañera, estudio]] de lectura y comprensión.
                        Han sido redactados por profesores de larga trayectoria en la enseñanza del idioma y son de gran [[utilidad, aprendizaje, desarrollor, mutualiadad]] para alumnos de los niveles principiante A1, elemental A2 e intermedio B1.
                        Cada lectura concluye con 5 preguntas de opción múltiple [[destinadas, catalogadas, revertidas, desarrolladas]] a evaluar la comprensión lograda. Gracias a ellos reforzarás tu vocabulario, mejorarás tu gramática y reconocerás expresiones propias del español. Son gratis, diseñados por nivel de complejidad y pueden [[imprimirse, compararse, leerse, mirarse]].'];
    }

    function getExerciseType2(){
        return [
            'type_id' => factory(\App\Exercise_type::class)->create([
                'title' => 'Translate Words',
                'description' => 'Write the propper translation to the words'
            ]),
            'title' => "Translate word",
            'description' => "Write the correct translations",
            'content' => '[{"word":"house","translation":"casa"},{"word":"dog","translation":"perro"}]'
        ];
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->generateEntity('App\Locations', 2);

        $this->generateEntity('App\Students', 20);
        $this->generateEntity('App\Teachers', 2);

        $this->generateEntity('App\Classrooms', 5);
        $this->generateEntity('App\Assignatures', 5);

        $this->generateEntity('App\Classroom_student', 15);

        $this->generateEntity('App\Assignature_teacher', 15);

        $this->generateEntity('App\Lessons', 10);
        
        factory(Assignment_Exercise::class)->create([
            'Exercise_id' => factory(Exercises::class)->create($this->getExerciseType1()),
        ]);
        factory(Assignment_Exercise::class)->create([
            'Exercise_id' => factory(Exercises::class)->create($this->getExerciseType2()),
        ]);


        return 0;
    }

    private function generateEntity($entityName, $numberOfLessons){
        for ($i = 1; $i <= $numberOfLessons; $i++) {
            factory(get_class(new $entityName()))->create();
        }
    }
}
