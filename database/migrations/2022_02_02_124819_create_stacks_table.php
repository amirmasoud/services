<?php

use Domain\IAM\Models\User;
use Domain\Sites\Models\Site;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stacks', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->string('name')->index();
            $table->unsignedBigInteger('price')->default(0);
            $table->json('properties')->nullable();
            $table->string('type')->index();
            $table->softDeletes();
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
        Schema::dropIfExists('stacks');
    }
};
