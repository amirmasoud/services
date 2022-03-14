<?php

namespace App\Dashboard\Controllers;

use App\Dashboard\Requests\StackRequest;
use App\Dashboard\Resources\ServerResource;
use App\Dashboard\Resources\StackResource;
use App\Dashboard\Resources\UI\StackFilterResource;
use App\Dashboard\Resources\UI\StackTableResource;
use App\Http\Controllers\Controller;
use Domain\Sites\Models\Stack;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class StackController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/Sites/Stacks/Index', [
            'records' => StackResource::collection(Stack::paginate()->withQueryString()),
            'table'   => fn () => new StackTableResource(),
            'filters' => fn () => new StackFilterResource(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Dashboard/Sites/Stacks/New');
    }

    public function store(StackRequest $request): RedirectResponse
    {
        Auth::user()->stacks()->create($request->validated());

        return redirect()->route('dashboard.sites.stacks.index');
    }

    public function edit(Stack $stack): Response
    {
        return Inertia::render('Dashboard/Sites/Stacks/Edit', [
            'resource' => new StackResource($stack),
        ]);
    }

    public function update(Stack $stack, StackRequest $request): RedirectResponse
    {
        $stack->update($request->validated());

        return redirect()->route('dashboard.sites.stacks.index');
    }

    public function destroy(Stack $stack): RedirectResponse
    {
        $stack->delete();

        return redirect()->back();
    }
}
