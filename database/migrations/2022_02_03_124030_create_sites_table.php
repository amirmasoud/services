<?php

use Domain\IAM\Models\User;
use Domain\Sites\Enums\SiteStatusEnum;
use Domain\Sites\Models\Server;
use Domain\Sites\Models\Stack;
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
        Schema::create('sites', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->foreignIdFor(Server::class);
            $table->foreignIdFor(Stack::class);
            $table->string('name');
            $table->string('host');
            $table->string('status')->default(SiteStatusEnum::STOPPED->value);
            $table->string('notes')->nullable();
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
        Schema::dropIfExists('sites');
    }
};
