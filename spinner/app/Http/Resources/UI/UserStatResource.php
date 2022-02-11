<?php

namespace App\Http\Resources\UI;

use App\Models\User;
use App\UI\StatUI;

class UserStatResource extends BaseUI
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
            new StatUI('Total Subscribers', '71,897', '70,946', '12%', 'increase'),
            new StatUI('Total Subscribers', '71,897', '70,946', '12%', 'decrease'),
            new StatUI('Total Subscribers', '71,897', '70,946', '12%', 'decrease'),
        ];
    }
}
