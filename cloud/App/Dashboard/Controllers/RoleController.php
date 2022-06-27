<?php

namespace App\Dashboard\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Domain\IAM\Models\User;
use Domain\IAM\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Dashboard\Requests\UserRequest;
use App\Dashboard\Resources\UserResource;
use App\Dashboard\Resources\RoleResource;
use App\Dashboard\Requests\UserSearchRequest;
use App\Dashboard\Resources\UI\RoleTableResouce;
use App\Dashboard\Resources\UI\RoleFilterResouce;

class RoleController extends Controller
{
    public function index(UserSearchRequest $request): Response
    {
        $users = Role::search($request->validated('search'))->paginate($request->validated('per_page'))->withQueryString();

        return Inertia::render('Dashboard/Users/Roles/Index', [
            'records' => RoleResource::collection($users),
            'filters' => fn () => new RoleFilterResouce(),
            'table' => fn () => new RoleTableResouce(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Dashboard/Users/Create');
    }

    public function store(UserRequest $request): RedirectResponse
    {
        User::create($request->validated());

        return redirect()->to('/dashboard/users');
    }

    public function edit(User $user): Response
    {
        return Inertia::render('Dashboard/Users/Edit', [
            'resource' => new UserResource($user),
        ]);
    }

    public function update(User $user, UserRequest $request): RedirectResponse
    {
        $user->update($request->validated());

        return redirect()->to('/dashboard/users');
    }

    public function destroy(User $user): RedirectResponse
    {
        $user->delete();

        return redirect()->back();
    }
}
