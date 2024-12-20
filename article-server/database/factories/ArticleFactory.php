<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

function createSlug($title) {
    $slug = strtolower($title);
    $slug = preg_replace('/[^\w\s]+/', '', $slug);
    $slug = preg_replace('/\s+/', '-', $slug);
    return trim($slug, '-');
}

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence(5);
        $slug = createSlug($title);
        
        return [
            //
            'title' => $title,
            'slug' => $slug,
            'resume' => $this->faker->sentence(10),
            'article' => $this->faker->text(200),
        ];
    }
}
