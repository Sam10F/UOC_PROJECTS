<?php

namespace App\Http\Controllers;

use App\User;

class UsersController extends Controller
{
  function getAllTeachers() {
    return User::getTeachers();
  }
}
