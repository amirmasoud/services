<?php

namespace App\Dashboard\Controllers;

use App\Dashboard\Requests\PluginSearchRequest;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Support\WordPress\ApiWordPress;

class StackController extends Controller
{
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
}
