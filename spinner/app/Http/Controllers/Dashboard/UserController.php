<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\SiteRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::query()
                     ->when($request->input('search'), fn ($query, $search) => $query->where('name', 'LIKE', '%'.$search.'%'))
                     ->paginate()
                     ->withQueryString();
        return Inertia::render('Dashboard/Users/Index', [
            'records' => UserResource::collection($users),
            'filters' => $request->only('search'),
            'stats' => [
                [ 'name' => 'Total users', 'stat' => '71,897', 'previousStat' => '70,946', 'change' => '12%', 'changeType' => 'increase' ],
                [ 'name' => 'Active users', 'stat' => '58.16%', 'previousStat' => '56.14%', 'change' => '2.02%', 'changeType' => 'increase' ],
                [ 'name' => 'Active Sites', 'stat' => '24.57%', 'previousStat' => '28.62%', 'change' => '4.05%', 'changeType' => 'decrease' ],
            ],
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
                        'link' => '/dashboard/users/{record_id}/edit'
                    ],
                    [
                        'name' => 'delete',
                        'label' => 'Delete',
                        'link' => '/dashboard/users/{record_id}',
                    ],
                    [
                        'name' => 'create',
                        'label' => 'Create',
                        'link' => '/dashboard/users/create',
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
