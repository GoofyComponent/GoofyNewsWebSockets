<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\Post;
use App\Models\User;
use App\Events\PostProcessed;
use jcobhams\NewsApi\NewsApi;

class RecentPost
{
    private $newsapi;

    public function __construct()
    {
        $this->newsapi = new NewsApi(env('NEWS_API_KEY'));
    }

    public function __invoke()
    {
        $all_articles = $this->newsapi->getEverything("Apple");
        $created = false;

        foreach ($all_articles->articles as $article) {
            // Vérifier si le titre est unique dans la base de données
            $existingPost = Post::where('title', $article->title)->first();

            if (!$existingPost) {
                // Créer un nouveau post seulement si le titre est unique
                $publishedAt = isset($article->publishedAt)
                    ? Carbon::parse($article->publishedAt)->toDateTimeString()
                    : null;

                Post::create([
                    'title' => $article->title,
                    'description' => $article->description ?? null,
                    'slug' => $article->url,
                    'published_at' => $publishedAt,
                    'content' => $article->content ?? null,
                    'source_name' => $article->source->name ?? null,
                    'user_id' => User::inRandomOrder()->first()->id,
                    'views' => rand(1, 1000),
                    'last_viewed_at' => Carbon::now()->subDays(rand(1, 1000)),
                    'image' => $article->urlToImage ?? null,
                ]);
                $created = true;
            }
        }

        if (!$created) {
            // Si aucun article n'a été créé, en créer entre 1 et 5 de manière aléatoire avec les factories
            $randomCount = rand(1, 5);
            Post::factory()
                ->for(User::inRandomOrder()->first())
                ->count($randomCount)->create();
        }

        PostProcessed::dispatch();
    }
}
