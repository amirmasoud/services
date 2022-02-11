<?php

namespace App\Http\Resources\UI;

use App\Models\User;
use App\UI\Filter\InputFilterUI;
use App\UI\Filter\ListFilterUI;

class UserFilterResource extends BaseUI
{
    public function __construct(public User $user = new User)
    {
        parent::__construct($user);
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
            new ListFilterUI('per_page', 'Per page', ['10' => 10, '25' => 25, '50' => 50, '100' => 100], $request->input('per_page') ?? 25),
        ];
    }
}
