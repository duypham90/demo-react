<?php

use Faker\Generator as Faker;

$factory->define(App\Models\WeddingDress::class, function (Faker $faker) {
    return [
        'title' => $faker->name,
        'description' => $faker->text,
        'album_id' => rand(1, 100),
        'type' => $faker->titleMale,
        'style' => $faker->colorName,
        'venue' => $faker->address,
        'rent_cost' => $faker->randomNumber(2),
        'price' => $faker->randomNumber(2),
        'tag' => $faker->url
    ];
});
