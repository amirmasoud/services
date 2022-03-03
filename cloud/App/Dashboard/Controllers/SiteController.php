<?php

namespace App\Dashboard\Controllers;

use App\Dashboard\Jobs\StopSite;
use App\Dashboard\Requests\SiteRequest;
use App\Dashboard\Requests\SiteSearchRequest;
use App\Dashboard\Resources\SiteResource;
use App\Dashboard\Resources\UI\SiteFilterResource;
use App\Dashboard\Resources\UI\SiteStatResource;
use App\Dashboard\Resources\UI\SiteTableResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;
use Support\Containers\ProcessContainer;
use Domain\Sites\Models\Site;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Support\Containers\Enums\ContainerState;

class SiteController extends Controller
{
    public function index(SiteSearchRequest $request): Response
    {
        $sites = Site::search($request->validated('search'))->paginate($request->input('per_page'))->withQueryString();

        return Inertia::render('Dashboard/Sites/Index', [
            'records' => SiteResource::collection($sites),
            'filters' => fn () => new SiteFilterResource(),
            'stats'   => fn () => new SiteStatResource(),
            'table'   => fn () => new SiteTableResource(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Dashboard/Sites/Create');
    }

    public function store(SiteRequest $request): RedirectResponse
    {
        Auth::user()->sites()->create(
            array_merge(
                $request->validated(),
                ['status' => ContainerState::STARTING]
            )
        );

        return redirect()->to('/dashboard/sites');
    }

    public function show(Site $site): Response
    {
        return Inertia::render('Dashboard/Sites/Show', [
            'record' => new SiteResource($site),
            'wordpress' => fn () => ProcessContainer::details("$site->name-wordpress"),
            'database' => fn () => ProcessContainer::details("$site->name-database"),
            'state' => fn () => ProcessContainer::state("$site->name-wordpress"),
        ]);
    }

    public function edit(Site $site): Response
    {
        return Inertia::render('Dashboard/Sites/Edit', [
            'resource' => new SiteResource($site),
        ]);
    }

    public function update(Site $site, SiteRequest $request): RedirectResponse
    {
        $site->update($request->validated());

        return redirect()->to('/dashboard/sites');
    }

    public function destroy(Site $site): RedirectResponse
    {
        $site->delete();

        return redirect()->back();
    }

    public function cli(Site $site, ?string $command = null)
    {
        return Inertia::render('Dashboard/Sites/Cli', [
            'record' => new SiteResource($site),
            'output' => ProcessContainer::for($site)->exec($command ?? 'wordpress-cli wp core update'),
        ]);
    }

    public function start(Site $site): RedirectResponse
    {
        event("eloquent.started: ".Site::class, $site);

        return redirect()->back();
    }

    public function stop(Site $site): RedirectResponse
    {
        event("eloquent.stopped: ".Site::class, $site);

        return redirect()->back();
    }

    public function restart(Site $site): RedirectResponse
    {
        event("eloquent.restarted: ".Site::class, $site);

        return redirect()->back();
    }
}
