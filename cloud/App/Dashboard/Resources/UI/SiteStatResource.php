<?php

namespace App\Dashboard\Resources\UI;

use App\Dashboard\UI\StatUI;
use Domain\Sites\Models\Site;

class SiteStatResource extends BaseUI
{
    public function __construct(public Site $site = new Site)
    {
        parent::__construct($site);
    }

    public function toArray($request)
    {
        return [
            new StatUI('Total Subscribers', '71,897', '70,946', '12%', 'increase'),
            new StatUI('Total Subscribers', '71,897', '70,946', '12%', 'decrease'),
            new StatUI('Total Subscribers', '71,897', '70,946', '12%', 'decrease'),
        ];
    }
}
