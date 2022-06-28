<?php

namespace App\Dashboard\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Domain\IAM\Models\User;
use Domain\IAM\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Dashboard\Requests\RoleRequest;
use App\Dashboard\Resources\RoleResource;
use App\Dashboard\Requests\UserSearchRequest;
use App\Dashboard\Resources\UI\RoleTableResouce;
use App\Dashboard\Resources\UI\RoleFilterResouce;

class RoleController extends Controller
{
    public function index(UserSearchRequest $request): Response
    {
        $roles = Role::search($request->validated('search'))->paginate($request->validated('per_page'))->withQueryString();

        return Inertia::render('Dashboard/Users/Roles/Index', [
            'records' => RoleResource::collection($roles),
            'filters' => fn () => new RoleFilterResouce(),
            'table' => fn () => new RoleTableResouce(),
        ]);
    }

    public function store(RoleRequest $request): RedirectResponse
    {
        Role::create($request->validated());

        return redirect()->to('/dashboard/users/roles');
    }

    public function create(): Response
    {
        return Inertia::render('Dashboard/Users/Roles/Create');
    }

    public function edit(Role $role): Response
    {
        return Inertia::render('Dashboard/Users/Roles/Edit', [
            'resource' => new RoleResource($role),
        ]);
    }

    public function update(Role $role, RoleRequest $request): RedirectResponse
    {
        $role->update($request->validated());

        return redirect()->to('/dashboard/users/roles');
    }

    public function destroy(User $user): RedirectResponse
    {
        $user->delete();

        return redirect()->back();
    }
}
