<?php

use Inertia\Inertia;
use App\Dashboard\Controllers\RoleController;
use App\Dashboard\Controllers\UserController;
use App\Dashboard\Controllers\AuthController;
use App\Dashboard\Controllers\SettingController;
use App\Dashboard\Controllers\PermissionController;

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

Route::prefix('dashboard')->middleware('auth')->name('dashboard.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard/Home');
    })->name('index');

    Route::get('/settings', [SettingController::class, 'general'])->name('settings.general');

    Route::resource('users', UserController::class)->except('show');
    Route::name('users.')
        ->prefix('users')
        ->group(function () {
            Route::resource('roles', RoleController::class)->except('show');
            Route::resource('permissions', PermissionController::class)->except('show');
        });
});
