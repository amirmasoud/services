<?php

namespace App\Dashboard\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Http\Controllers\Controller;

class SettingController extends Controller
{
    public function general(): Response
    {
        return Inertia::render('Dashboard/Settings/General');
    }
}
