<?php

namespace Database\Seeders;

use Domain\Users\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\QueryException;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
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

        $this->command->info('Admin user created/exists with following initial credentials:');
        $this->command->info('Email:    admin@cloud.test');
        $this->command->info('Password: secret');
    }
}
