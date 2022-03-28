<?php

namespace App\Dashboard\Resources\UI;

use Domain\Sites\Models\Site;
use App\Dashboard\UI\Table\FieldTableUI;
use App\Dashboard\UI\Table\ActionTableUI;

class SiteTableResource extends BaseUI
{
    public function __construct(public Site $site = new Site)
    {
        parent::__construct($site);
    }

    public function toArray($request)
    {
        return [
            'fields' => [
                new FieldTableUI('name', 'Name'),
                new FieldTableUI('host', 'Host'),
                new FieldTableUI('status', 'Status'),
            ],
            'actions' => array_combine(
                ['edit', 'delete', 'force_delete', 'restore', 'details', 'create'],
                [
                    new ActionTableUI('edit', 'Edit', 'dashboard.sites.edit'),
                    new ActionTableUI('delete', 'Delete', 'dashboard.sites.destroy'),
                    new ActionTableUI('force_delete', 'Force delete', 'dashboard.sites.force-destroy'),
                    new ActionTableUI('restore', 'Restore', 'dashboard.sites.restore'),
                    new ActionTableUI('show', 'Details', 'dashboard.sites.show'),
                    new ActionTableUI('create', 'Create', 'dashboard.sites.create'),
                ]
            ),
        ];
    }
}
