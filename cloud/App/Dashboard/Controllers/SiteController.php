<?php

namespace App\Dashboard\Controllers;

use App\Dashboard\Requests\SiteRequest;
use App\Dashboard\Resources\SiteResource;
use App\Dashboard\Resources\UI\SiteFilterResource;
use App\Dashboard\Resources\UI\SiteStatResource;
use App\Dashboard\Resources\UI\SiteTableResource;
use App\Http\Controllers\Controller;
use App\Jobs\StopSite;
use Support\Containers\ProcessContainer;
use Domain\Sites\Models\Site;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Support\Containers\Enums\ContainerState;

class SiteController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        $sites = Site::query()
                     ->when($request->input('search'), fn ($query, $search) => $query->where('name', 'LIKE', '%'.$search.'%'))
                     ->paginate($request->input('per_page', 25))
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
                ['status' => ContainerState::STARTING]
            )
        );

        return redirect()->to('/dashboard/sites');
    }

    public function show(Site $site): \Inertia\Response
    {
        return Inertia::render('Dashboard/Sites/Show', [
            'record' => new SiteResource($site),
            'wordpress' => fn () => ProcessContainer::details("$site->name-wordpress"),
            'database' => fn () => ProcessContainer::details("$site->name-mysql"),
        ]);
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

    public function wpcli(Site $site)
    {
        ProcessContainer::for($site)->installWPCli();

        return redirect()->back();
    }

    public function start(Site $site): \Illuminate\Http\RedirectResponse
    {
        ProcessContainer::for($site)->start();

        return redirect()->back();
    }

    public function stop(Site $site): \Illuminate\Http\RedirectResponse
    {
        ProcessContainer::for($site)->stop();

        return redirect()->back();
    }

    public function restart(Site $site): \Illuminate\Http\RedirectResponse
    {
        ProcessContainer::for($site)->restart();

        return redirect()->back();
    }
}
