<?php

namespace App\Dashboard\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Support\Containers\Enums\ContainerState;
use Support\Containers\ProcessContainer;

class SettingController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Dashboard/Settings', [
            'info' => Inertia::lazy(fn () => ProcessContainer::dockerIsRunning()),
            'proxy' => Inertia::lazy(fn () => ProcessContainer::hasStatus('traefik', ContainerState::RUNNING)),
        ]);
    }
}
