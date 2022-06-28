<?php

namespace App\Dashboard\Resources\UI;

use App\Dashboard\UI\Table\ActionTableUI;
use App\Dashboard\UI\Table\FieldTableUI;
use Domain\IAM\Models\Role;

class RoleTableResouce extends BaseUI
{
    public function __construct(public Role $role = new Role)
    {
        parent::__construct($role);
    }

    public function toArray($request)
    {
        return [
            'fields' => [
                new FieldTableUI('name', 'Name'),
            ],
            'actions' => array_combine(
                ['edit', 'delete', 'create'],
                [
                    new ActionTableUI('edit', 'Edit', 'dashboard.users.roles.edit'),
                    new ActionTableUI('delete', 'Delete', 'dashboard.users.roles.destroy'),
                    new ActionTableUI('create', 'Create', 'dashboard.users.roles.create'),
                ]
            ),
        ];
    }
}
