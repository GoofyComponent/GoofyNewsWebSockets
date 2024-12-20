<?php

namespace Database\Seeders;

use App\Events\PostProcessed;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Post::factory(10)
            ->for(User::inRandomOrder()->first())
            ->create();

        PostProcessed::dispatch();
        event(new PostProcessed);
    }
}
