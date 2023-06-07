<?php

use App\Dashboard\Controllers\AuthController;
use App\Dashboard\Controllers\DashboardController;
use App\Dashboard\Controllers\PermissionController;
use App\Dashboard\Controllers\RoleController;
use App\Dashboard\Controllers\SettingController;
use App\Dashboard\Controllers\UserController;
use Carbon\Carbon;

/**
 * Auth routes.
 */
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'loginForm'])->name('login');
    Route::post('/login', [AuthController::class, 'loginWithEmail']);
    Route::get('/register', [AuthController::class, 'registerForm'])->name('register');
    Route::post('/register', [AuthController::class, 'registerWithEmail']);
    Route::get('/forgot-password', [AuthController::class, 'forgotPasswordForm'])->name('password.request');
    Route::post('/forgot-password', [AuthController::class, 'forgotPasswordWithEmail'])->name('password.email');
    Route::get('/reset-password/{token}', [AuthController::class, 'resetPasswordForm'])->name('password.reset');
    Route::post('/reset-password', [AuthController::class, 'resetPassword'])->name('password.update');
});
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth')->name('logout');

Route::prefix('home')->middleware('auth')->name('dashboard.')->group(function () {
    Route::get('/', DashboardController::class)->name('index');

    Route::get('/settings', [SettingController::class, 'general'])->name('settings.general');

    Route::resource('users', UserController::class)->except('show');
    Route::name('users.')
        ->prefix('users')
        ->group(function () {
            Route::resource('roles', RoleController::class)->except('show');
            Route::resource('permissions', PermissionController::class)->except('show');
        });
});

Route::prefix('home/clock')->middleware('auth')->name('home.clock')->group(function () {
    Route::get('/', function () {
        // dd(DateTimeZone::listIdentifiers(DateTimeZone::ALL));
        return \Inertia\Inertia::render('Clock/Index', [
            'diff_1' => Carbon::parse('2025-01-10')->diffAsCarbonInterval(now()),
            'diff_2' => Carbon::parse('2024-05-31')->diffAsCarbonInterval(now()),
            'clocks' => \Domain\Clock\Models\Clock::all()
        ]);
    });
});
