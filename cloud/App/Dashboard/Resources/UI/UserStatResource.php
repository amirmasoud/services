<?php

namespace App\Dashboard\Resources\UI;

use App\Dashboard\UI\StatUI;
use Domain\IAM\Models\User;

class UserStatResource extends BaseUI
{
    public function __construct(public User $user = new User)
    {
        parent::__construct($user);
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
