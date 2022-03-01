<?php


namespace App\Http\Controllers;

use App\Post;

class PostsController
{
    public function show($slug){
        $post = Post::where('id', $slug)->firstOrFail();

        return view('my-tests', [
           'post' => $post
        ]);
    }

}
