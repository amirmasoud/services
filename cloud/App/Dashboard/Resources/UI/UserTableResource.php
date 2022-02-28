<?php

namespace App\Dashboard\Resources\UI;

use App\Dashboard\UI\Table\ActionTableUI;
use App\Dashboard\UI\Table\FieldTableUI;
use Domain\IAM\Models\User;

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
            'actions' => array_combine(
                ['edit', 'delete', 'create'],
                [
                    new ActionTableUI('edit', 'Edit', '/dashboard/users/{id}/edit'),
                    new ActionTableUI('delete', 'Delete', '/dashboard/users/delete/{id}'),
                    new ActionTableUI('create', 'Create', '/dashboard/users/create'),
                ]
            )
        ];
    }
}
