<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Photo::class, function (Faker $faker) {
    return [
        'title' => $faker->name,
        'description' => $faker->text,
        'thumnail' => $faker->imageUrl(300, 300),
        'images' => rand(1, 100),
        'type' => $faker->titleMale,
        'album' => $faker->imageUrl(200, 600),
        'vanue' => $faker->address,
        'time' => $faker->dateTimeBetween('-2 days', '+1 day'),
        'transport_id' => rand(1, 100),
        'tag' => $faker->url
    ];
});
