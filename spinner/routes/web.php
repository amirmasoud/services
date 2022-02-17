<?php

use App\Enums\ContainerStatus;
use App\Http\Controllers\Dashboard\SettingController;
use App\Http\Controllers\Dashboard\SiteController;
use App\Http\Controllers\Dashboard\UserController;
use App\Http\Controllers\OauthController;
use App\Models\Site;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Auth routes
Route::middleware('guest')->group(function () {
    Route::get('login', [OauthController::class, 'loginForm'])->name('login');
    Route::post('login', [OauthController::class, 'loginWithEmail']);
    Route::get('register', [OauthController::class, 'registerWithEmailForm'])->name('register');
    Route::post('register', [OauthController::class, 'registerWithEmail']);
    Route::get('auth/{provider}/callback', [OauthController::class, 'callback']);
});
Route::post('logout', [OauthController::class, 'logout'])->middleware('auth')->name('logout');

Route::prefix('dashboard')->middleware('auth')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard/Home', [
            'stats' => [
                [ 'name' => 'Total Sites', 'stat' => Site::count(), 'previousStat' => '70,946', 'change' => '12%', 'changeType' => 'increase' ],
                [ 'name' => 'Running Sites', 'stat' => Site::whereStatus(ContainerStatus::STARTED)->count(), 'previousStat' => '56.14%', 'change' => '2.02%', 'changeType' => 'increase' ],
                [ 'name' => 'Stopped Sites', 'stat' => Site::whereStatus(ContainerStatus::STOPPED)->count(), 'previousStat' => '28.62%', 'change' => '4.05%', 'changeType' => 'decrease' ],
            ],
        ]);
    });

    Route::get('/settings', [SettingController::class, 'index'])->name('settings.index');

    Route::resource('sites', SiteController::class)->except('show');
    Route::get('sites/{site}/wp-cli', [SiteController::class, 'wpCli'])->name('sites.wp-cli');
    Route::resource('users', UserController::class)->except('show');

    Route::get('/wp-cli', function () {

    });
});

Route::get('/', function () {
    return 'WIP - Cloud';
});
