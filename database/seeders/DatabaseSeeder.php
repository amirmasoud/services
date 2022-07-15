<?php

namespace Database\Seeders;

use Domain\Users\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\QueryException;
use Spatie\Permission\Exceptions\PermissionAlreadyExists;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        try {
            User::factory()->create([
                'name' => 'Admin',
                'email' => 'admin@cloud.test',
                'password' => bcrypt('secret'),
            ]);
        } catch (QueryException) {
            $this->command->warn('Admin user already exists, skipping');
        }

        try {
            User::factory(100)->create();
        } catch (QueryException) {
            $this->command->warn('Fake user already exists, skipping');
        }

        try {
            $this->call([
                RolesAndPermissionsSeeder::class,
            ]);
        } catch (PermissionAlreadyExists) {
            $this->command->warn("Permission already exists, skipping");
        }
    }
}
