<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWeddingDressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wedding_dresses', function (Blueprint $table) {
            $table->increments('id');
            $table->char('title');
            $table->string('description');
            $table->integer('album_id');
            $table->string('type');
            $table->string('style');
            $table->string('venue');
            $table->float('rent_cost');
            $table->float('price');
            $table->char('tag');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wedding_dresses');
    }
}
