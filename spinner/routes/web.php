<?php

use App\Http\Controllers\Dashboard\SiteController;
use App\Http\Controllers\Dashboard\UserController;
use App\Http\Controllers\OauthController;
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
        return Inertia::render('Dashboard/Home');
    });

    Route::get('/settings', function () {
        return Inertia::render('Dashboard/Settings');
    });

    Route::resource('sites', SiteController::class)->except('show');
    Route::get('sites/{site}/wp-cli', [SiteController::class, 'wpCli'])->name('sites.wp-cli');
    Route::resource('users', UserController::class)->except('show');

    Route::get('/wp-cli', function () {

    });
});

Route::get('/', function () {
    return view('welcome');
});
