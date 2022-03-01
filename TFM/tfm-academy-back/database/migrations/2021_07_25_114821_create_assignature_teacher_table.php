<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssignatureTeacherTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assignature_teacher', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('assignature_id');
            $table->unsignedBigInteger('teacher_id');
            $table->timestamps();

            $table->unique(['teacher_id', 'assignature_id']);

            $table->foreign('assignature_id')
                ->references('id')
                ->on('assignatures')
                ->onDelete('cascade');

            $table->foreign('teacher_id')
                ->references('id')
                ->on('teachers')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('assignature_teacher');
    }
}
