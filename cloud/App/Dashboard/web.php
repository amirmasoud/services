<?php

use App\Dashboard\Controllers\OauthController;
use App\Dashboard\Controllers\SettingController;
use App\Dashboard\Controllers\SiteController;
use App\Dashboard\Controllers\UserController;
use Domain\Sites\Models\Site;
use Inertia\Inertia;
use Support\Containers\Enums\ContainerState;

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
                [ 'name' => 'Running Sites', 'stat' => Site::whereStatus(ContainerState::STARTED)->count(), 'previousStat' => '56.14%', 'change' => '2.02%', 'changeType' => 'increase' ],
                [ 'name' => 'Stopped Sites', 'stat' => Site::whereStatus(ContainerState::STOPPED)->count(), 'previousStat' => '28.62%', 'change' => '4.05%', 'changeType' => 'decrease' ],
            ],
        ]);
    });

    Route::get('/settings', [SettingController::class, 'index'])->name('settings.index');

    Route::resource('users', UserController::class)->except('show');

    Route::resource('sites', SiteController::class);
    Route::controller(SiteController::class)->group(function () {
        Route::post('sites/{site}/wpcli', 'wpcli');
        Route::post('sites/{site}/start', 'start');
        Route::post('sites/{site}/stop', 'stop');
        Route::post('sites/{site}/restart', 'restart');
    });

    Route::get('/wp-cli', function () {

    });
});
