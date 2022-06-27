<?php

namespace App\Dashboard\Resources\UI;

use App\Dashboard\UI\Filter\InputFilterUI;
use App\Dashboard\UI\Filter\ListFilterUI;
use Domain\IAM\Models\Role;

class RoleFilterResouce extends BaseUI
{
    public function __construct(public Role $role = new Role)
    {
        parent::__construct($role);
    }

    public function toArray($request)
    {
        return [
            new InputFilterUI('search', 'Search', $request->input('search')),
            new ListFilterUI('per_page', 'Per page', ['10' => 10, '25' => 25, '50' => 50, '100' => 100], $request->input('per_page') ?? 25),
        ];
    }
}
