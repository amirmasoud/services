<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Services\ContainerProcessor;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Dashboard/Settings', [
            'info' => ContainerProcessor::dockerIsRunning(),
        ]);
    }
}
