<?php

namespace Database\Seeders;

use Domain\Users\Models\Role;
use Illuminate\Database\Seeder;
use Domain\Users\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::findOrCreate('edit articles');
        Permission::findOrCreate('delete articles');
        Permission::findOrCreate('publish articles');
        Permission::findOrCreate('unpublish articles');

        // create roles and assign created permissions
        Role::findOrCreate('writer')->givePermissionTo('edit articles');
        Role::findOrCreate('moderator')->givePermissionTo(['publish articles', 'unpublish articles']);
        Role::findOrCreate('super-admin')->givePermissionTo(Permission::all());
    }
}
