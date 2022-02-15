<?php

namespace App\Http\Resources\UI;

use App\Models\User;
use App\UI\Table\ActionTableUI;
use App\UI\Table\FieldTableUI;
use Illuminate\Support\Arr;

class UserTableResource extends BaseUI
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
            'fields' => [
                new FieldTableUI('name', 'Name'),
                new FieldTableUI('email', 'Email'),
                new FieldTableUI('email_verified_at', 'Email Verified At')
            ],
            'actions' => collect([
                new ActionTableUI('edit', 'Edit', '/dashboard/users/{id}/edit'),
                // new ActionTableUI('create', 'Create', '/dashboard/users/create'),
            ])->concat([new ActionTableUI('delete', 'Delete', '/dashboard/users/{id}')])
                ->flatten()
            ->dump()
        ];
    }
}
