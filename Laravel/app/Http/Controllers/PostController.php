<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::with('user')
            ->orderBy('published_at', direction: 'desc')
            ->paginate(10);

        // Retourner la liste paginée des posts
        return response()->json($posts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Implémentation ignorée
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Implémentation ignorée
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Implémentation ignorée
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Implémentation ignorée
    }
}
