<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\SiteRequest;
use App\Http\Resources\SiteResource;
use App\Jobs\StopSite;
use App\Models\Site;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SiteController extends Controller
{
    public function index(Request $request)
    {
        $sites = Site::query()
                     ->when($request->input('search'), fn ($query, $search) => $query->where('name', 'LIKE', '%'.$search.'%'))
                     ->paginate()
                     ->withQueryString();

        return Inertia::render('Dashboard/Sites/Index', [
            'records' => SiteResource::collection($sites),
            'filters' => $request->only('search'),
            'table' => [
                'fields' => [
                    [
                        'name' => 'name',
                        'label' => 'name',
                    ],
                    [
                        'name' => 'host',
                        'label' => 'Host',
                    ],
                ],
                'actions' => [
                    [
                        'name' => 'edit',
                        'label' => 'Edit',
                        'link' => '/dashboard/sites/{record_id}/edit'
                    ],
                    [
                        'name' => 'delete',
                        'label' => 'Delete',
                        'link' => '/dashboard/sites/{record_id}',
                    ],
                    [
                        'name' => 'create',
                        'label' => 'Create',
                        'link' => '/dashboard/sites/create',
                    ],
                ],
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Sites/Create');
    }

    public function store(SiteRequest $request): \Illuminate\Http\RedirectResponse
    {
        Auth::user()->sites()->create($request->validated());

        return redirect()->to('/dashboard/sites');
    }

    public function show($id)
    {
        //
    }

    public function edit(Site $site)
    {
        return Inertia::render('Dashboard/Sites/Edit', [
            'resource' => new SiteResource($site),
        ]);
    }

    public function update(Site $site, SiteRequest $request)
    {
        $site->update($request->validated());

        return redirect()->to('/dashboard/sites');
    }

    public function destroy(Site $site): \Illuminate\Http\RedirectResponse
    {
        StopSite::dispatchAfterResponse($site);

        $site->delete();

        return redirect()->back();
    }
}
