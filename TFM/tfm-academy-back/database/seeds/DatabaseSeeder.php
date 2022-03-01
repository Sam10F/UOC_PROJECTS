<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\User();
        $user->name = 'John';
        $user->surname = 'DOE';
        $user->email = 't@t.com';
        $user->password = bcrypt('secret');
        $user->location_id = '1';
        $user->rol_id = '2.00';
        $user->save();
    }
}
