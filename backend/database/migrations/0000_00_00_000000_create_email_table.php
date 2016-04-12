<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmailTable extends Migration {

  public function up() {
    Schema::create('emailLog', function(Blueprint $table) {
      $table->increments('id');
      $table->string('name');
      $table->string('email');
      $table->string('phone')->nullable();
      $table->string('notes')->nullable();
      $table->boolean('success')->nullable();
      $table->string('failReason')->nullable();
      $table->timestamps();
    });


  }

  public function down() {
    Schema::drop('emailLog');
  }
}
