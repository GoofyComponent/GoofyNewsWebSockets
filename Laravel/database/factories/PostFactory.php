<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'content' => $this->faker->paragraphs(3, true),
            'image' => $this->faker->imageUrl(),
            'slug' => $this->faker->slug,
            'is_published' => $this->faker->boolean,
            'published_at' => Carbon::now(),
            'views' => $this->faker->numberBetween(0, 1000),
            'last_viewed_at' => $this->faker->dateTime,
        ];
    }
}
