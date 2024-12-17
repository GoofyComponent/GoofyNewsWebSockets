<?php

namespace App\Filament\Widgets;

use App\Models\Post;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;

class PostStats extends BaseWidget
{
    public $stats = [];

    public function mount()
    {
        $this->updateStats();
    }

    public function updateStats()
    {
        $this->stats = [
            'totalPosts' => Post::count(),
            'publishedPosts' => Post::where('is_published', true)->count(),
            'totalViews' => Post::sum('views'),
            'lastViewedAt' => Post::latest('last_viewed_at')->value('last_viewed_at'),
        ];
    }

    protected function getCards(): array
    {
        return [
            Stat::make('Nombre total d\'articles', $this->stats['totalPosts'] ?? Post::count()),
            Stat::make('Nombre d\'articles publiés', $this->stats['publishedPosts'] ?? Post::where('is_published', true)->count()),
            Stat::make('Total des vues', $this->stats['totalViews'] ?? Post::sum('views')),
            Stat::make('Dernière vue', $this->stats['lastViewedAt'] ?? Post::latest('last_viewed_at')->value('last_viewed_at') ?? 'Aucune vue'),
        ];
    }
}
