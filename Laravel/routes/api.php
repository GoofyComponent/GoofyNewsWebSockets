<?php

use App\Models\Post;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostStatsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route pour émettre les statistiques
// Route::get('/emit-stats', [PostStatsController::class, 'emitStats']);

// // Route pour incrémenter les vues d'un post spécifique
// Route::post('/posts/{post}/increment-views', [PostStatsController::class, 'incrementViews']);
