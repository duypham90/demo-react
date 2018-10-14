<?php

use App\Models\WeddingDress;
use Illuminate\Database\Seeder;

class WeddingDressesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(WeddingDress::class, 100)->create();
    }
}
