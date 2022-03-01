<?php

namespace App\Http\Controllers;

use App\Assignatures;

class AssignaturesController extends Controller
{
    function getAllClassrooms(){
        return Assignatures::find(2)->lessons;
      }

      function deleteAssignature($assignatureId) {
        $assignature = Assignatures::find($assignatureId);
        return $assignature->delete();
    }
}
