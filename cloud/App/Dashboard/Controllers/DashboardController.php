<?php

namespace App\Dashboard\Controllers;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Dashboard/TheHome', [
            'diff_1' => Carbon::parse('2025-01-10')->diffAsCarbonInterval(now()),
            'diff_2' => Carbon::parse('2024-05-31')->diffAsCarbonInterval(now()),
        ]);
    }
}
