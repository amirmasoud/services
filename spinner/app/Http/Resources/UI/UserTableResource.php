<?php

namespace App\Http\Resources\UI;

use App\Models\User;
use App\UI\Table\ActionUI;
use App\UI\Table\FieldUI;

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
                new FieldUI('name', 'Name'),
                new FieldUI('email', 'Email'),
                new FieldUI('email_verified_at', 'Email Verified At')
            ],
            'actions' => [
                new ActionUI('edit', 'Edit', '/dashboard/users/{id}/edit'),
                new ActionUI('delete', 'Delete', '/dashboard/users/{id}'),
                new ActionUI('create', 'Create', '/dashboard/users/create'),
            ],
        ];
    }
}
