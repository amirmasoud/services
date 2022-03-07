<?php

namespace App\Dashboard\Resources\UI;

use App\Dashboard\UI\Table\ActionTableUI;
use App\Dashboard\UI\Table\FieldTableUI;
use Domain\Sites\Models\Stack;

class StackTableResource extends BaseUI
{
    public function __construct(public Stack $site = new Stack())
    {
        parent::__construct($site);
    }

    public function toArray($request)
    {
        return [
            'fields' => [
                new FieldTableUI('name', 'Name'),
                new FieldTableUI('type', 'Type'),
            ],
            'actions' => array_combine(
                ['edit', 'delete', 'create'],
                [
                    new ActionTableUI('edit', 'Edit', '/dashboard/stacks/{id}/edit'),
                    new ActionTableUI('delete', 'Delete', '/dashboard/stacks/{id}'),
                    new ActionTableUI('create', 'Create', '/dashboard/stacks/create'),
                ]
            ),
        ];
    }
}
