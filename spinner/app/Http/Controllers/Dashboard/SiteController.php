<?php

namespace App\Http\Controllers\Dashboard;

use App\Enums\ContainerStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\SiteRequest;
use App\Http\Resources\SiteResource;
use App\Http\Resources\UI\SiteFilterResource;
use App\Http\Resources\UI\SiteStatResource;
use App\Http\Resources\UI\SiteTableResource;
use App\Http\Resources\UI\UserTableResource;
use App\Jobs\StopSite;
use App\Models\Site;
use App\Services\ContainerProcessor;
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
            'filters' => fn () => new SiteFilterResource(),
            'stats'   => fn () => new SiteStatResource(),
            'table'   => fn () => new SiteTableResource(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Sites/Create');
    }

    public function store(SiteRequest $request): \Illuminate\Http\RedirectResponse
    {
        $site = Auth::user()->sites()->create(
            array_merge(
                $request->validated(),
                ['status' => ContainerStatus::STARTING]
            )
        );

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

    public function wpCli(Site $site)
    {
        ContainerProcessor::for($site)->installWPCli();
    }
}
