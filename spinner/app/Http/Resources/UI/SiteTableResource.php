<?php

namespace App\Http\Resources\UI;

use App\Models\Site;
use App\UI\Table\ActionUI;
use App\UI\Table\FieldUI;

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
                new FieldUI('name', 'Name'),
                new FieldUI('host', 'Host'),
            ],
            'actions' => [
                new ActionUI('edit', 'Edit', '/dashboard/sites/{id}/edit'),
                new ActionUI('delete', 'Delete', '/dashboard/sites/{id}'),
                new ActionUI('create', 'Create', '/dashboard/sites/create'),
            ],
        ];
    }
}
