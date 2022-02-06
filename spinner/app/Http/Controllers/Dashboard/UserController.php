<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\SiteRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = \App\Models\User::query()
                                 ->when($request->input('search'), fn ($query, $search) => $query->where('name', 'LIKE', '%'.$search.'%'))
                                 ->paginate()
                                 ->withQueryString();

        return Inertia::render('Dashboard/Users/Index', [
            'records' => UserResource::collection($users),
            'filters' => $request->only('search'),
            'table' => [
                'fields' => [
                    [
                        'name' => 'name',
                        'label' => 'name',
                    ],
                    [
                        'name' => 'email',
                        'label' => 'Email',
                    ],
                    [
                        'name' => 'email_verified_at',
                        'label' => 'email_verified_at',
                    ]
                ],
                'actions' => [
                    [
                        'name' => 'edit',
                        'label' => 'Edit',
                        'link' => '/dashboard/user/{record_id}/edit'
                    ],
                    [
                        'name' => 'delete',
                        'label' => 'Delete',
                        'link' => '/dashboard/user/{record_id}',
                    ],
                    [
                        'name' => 'create',
                        'label' => 'Create',
                        'link' => '/dashboard/user/create',
                    ],
                ],
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Users/Create');
    }

    public function store(SiteRequest $request): \Illuminate\Http\RedirectResponse
    {
        User::create($request->validated());

        return redirect()->to('/dashboard/users');
    }

    public function show($id)
    {
        //
    }

    public function edit(User $user)
    {
        return Inertia::render('Dashboard/Users/Edit', [
            'resource' => new UserResource($user),
        ]);
    }

    public function update(User $user, SiteRequest $request)
    {
        $user->update($request->validated());

        return redirect()->to('/dashboard/users');
    }

    public function destroy(User $user)
    {
        $user->delete();
    }
}
