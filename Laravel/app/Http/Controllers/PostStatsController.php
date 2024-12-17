<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Livewire\Livewire;
use App\Events\StatsUpdated;
use Illuminate\Http\Request;

class PostStatsController extends Controller
{
    /**
     * Mettre à jour les statistiques et émettre un événement.
     */
    public function emitStats() {}

    /**
     * Incrémenter les vues d'un post spécifique.
     */
    public function incrementViews(Post $post)
    {
        $post->increment('views');
        $post->last_viewed_at = now();
        $post->save();

        // Mettre à jour les statistiques après l'incrémentation
        $this->emitStats();

        return response()->json([
            'message' => 'Vues incrémentées',
            'post' => $post
        ]);
    }
}
