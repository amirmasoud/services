<?php

namespace App\Http\Resources\UI;

use App\Models\Site;
use App\UI\StatUI;
use App\UI\Table\ActionUI;
use App\UI\Table\FieldUI;

class SiteStatResource extends BaseUI
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
            new StatUI('Total Subscribers', '71,897', '70,946', '12%', 'increase'),
            new StatUI('Total Subscribers', '71,897', '70,946', '12%', 'decrease'),
            new StatUI('Total Subscribers', '71,897', '70,946', '12%', 'decrease'),
        ];
    }
}
