<?php

namespace App\Dashboard\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Support\Containers\Shell\Docker;
use Support\Containers\ProcessContainer;
use Support\Containers\Enums\ContainerState;

class SettingController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Dashboard/Settings', [
            'info' => Inertia::lazy(fn () => app(Docker::class)->isDockerServiceRunning()),
            'proxy' => Inertia::lazy(fn () => ProcessContainer::hasState('traefik', ContainerState::RUNNING)),
        ]);
    }
}
