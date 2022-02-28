<?php

namespace App\Dashboard\Controllers;

use App\Dashboard\Requests\SiteRequest;
use App\Dashboard\Resources\UI\UserFilterResource;
use App\Dashboard\Resources\UI\UserStatResource;
use App\Dashboard\Resources\UI\UserTableResource;
use App\Dashboard\Resources\UserResource;
use App\Http\Controllers\Controller;
use Domain\IAM\Models\User;
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
            'filters' => fn () => new UserFilterResource(),
            'stats'   => fn () => new UserStatResource(),
            'table'   => fn () => new UserTableResource(),
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
