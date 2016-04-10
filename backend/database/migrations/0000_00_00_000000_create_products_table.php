<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration {

  public function up() {
    Schema::create('product', function(Blueprint $table) {
      $table->increments('id');
      $table->string('name');
      $table->string('brand');
      $table->string('description');
      $table->string('imageUrl');
      $table->double('price');
      $table->timestamps();
    });
  }

  public function down() {
    Schema::drop('product');
  }
}
