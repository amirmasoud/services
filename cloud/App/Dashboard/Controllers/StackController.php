<?php

namespace App\Dashboard\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Support\WordPress\ApiWordPress;

class StackController extends Controller
{
    public function plugins(): \Inertia\Response
    {
        return Inertia::render('Dashboard/Stacks/Plugins', [
            'data' => ApiWordPress::plugins(),
        ]);
    }
}
