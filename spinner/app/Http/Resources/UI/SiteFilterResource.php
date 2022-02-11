<?php

namespace App\Http\Resources\UI;

use App\Models\Site;
use App\UI\Filter\InputFilterUI;

class SiteFilterResource extends BaseUI
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
            new InputFilterUI('search', 'Search', $request->input('search')),
        ];
    }
}
