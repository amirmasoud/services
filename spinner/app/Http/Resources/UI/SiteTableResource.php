<?php

namespace App\Http\Resources\UI;

use App\Models\Site;
use App\UI\Table\ActionTableUI;
use App\UI\Table\FieldTableUI;

class SiteTableResource extends BaseUI
{
    public function __construct(public Site $site = new Site)
    {
        parent::__construct($site);
    }

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'fields' => [
                new FieldTableUI('name', 'Name'),
                new FieldTableUI('host', 'Host'),
            ],
            'actions' => array_combine(
                ['edit', 'delete', 'details', 'create'],
                [
                    new ActionTableUI('edit', 'Edit', '/dashboard/sites/{id}/edit'),
                    new ActionTableUI('delete', 'Delete', '/dashboard/sites/{id}'),
                    new ActionTableUI('details', 'Details', '/dashboard/sites/{id}'),
                    new ActionTableUI('create', 'Create', '/dashboard/sites/create'),
                ]
            ),
        ];
    }
}
