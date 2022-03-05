<?php

namespace App\Dashboard\Controllers;

use App\Dashboard\Requests\PluginSearchRequest;
use App\Dashboard\Requests\ThemeSearchRequest;
use App\Dashboard\Requests\WordPressFiltersRequest;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Support\WordPress\ApiWordPress;

class StackController extends Controller
{
    public function themes(ThemeSearchRequest $searchRequest): \Inertia\Response
    {
        return Inertia::render('Dashboard/Stacks/Themes', [
            'records' => ApiWordPress::themes($searchRequest->validated('search')),
            'search'  => $searchRequest->validated('search'),
        ]);
    }

    public function plugins(PluginSearchRequest $searchRequest): \Inertia\Response
    {
        return Inertia::render('Dashboard/Stacks/Plugins', [
            'records' => ApiWordPress::plugins($searchRequest->validated('search')),
            'search'  => $searchRequest->validated('search'),
        ]);
    }

    public function plans(): \Inertia\Response
    {
        return Inertia::render('Dashboard/Stacks/Plans', [
        ]);
    }

    public function newWordPressSite(WordPressFiltersRequest $request): \Inertia\Response
    {
        // @todo resources
        return Inertia::render('Dashboard/Stacks/WordPress/New', [
            'plugins' => fn () => ApiWordPress::plugins($request->validated('plugin_search')),
            'themes' => fn () => ApiWordPress::themes($request->validated('theme_search')),
            'plans' => fn () => [],
            'filters' => $request->validated(),
        ]);
    }
}
