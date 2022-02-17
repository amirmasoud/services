<?php

namespace App\Http\Controllers\Dashboard;

use App\Enums\ContainerStatus;
use App\Http\Controllers\Controller;
use App\Services\ContainerProcessor;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Dashboard/Settings', [
            'info' => Inertia::lazy(fn () => ContainerProcessor::dockerIsRunning()),
            'proxy' => Inertia::lazy(fn () => ContainerProcessor::hasStatus('traefik', ContainerStatus::RUNNING)),
        ]);
    }
}
