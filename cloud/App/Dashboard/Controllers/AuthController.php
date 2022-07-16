<?php

namespace App\Dashboard\Controllers;

use Inertia\Inertia;
use App\Enums\ProviderEnum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Requests\CallbackProviderRequest;
use App\Http\Requests\Auth\RegisterWithEmailRequest;

class AuthController extends Controller
{
    public string $redirectTo = '/dashboard';

    public function loginForm(): \Inertia\Response
    {
        return Inertia::render('Auth/Login', [
            'github' => Socialite::driver('github')->redirect()->getTargetUrl(),
            'google' => Socialite::driver('google')->redirect()->getTargetUrl(),
        ]);
    }

    public function registerForm(Request $request)
    {
        return Inertia::render('Auth/Register');
    }

    public function registerWithEmail(RegisterWithEmailRequest $request)
    {
        User::create($request->validated());

        if (Auth::attempt($request->only('email', 'password'))) {
            $request->session()->regenerate();

            return redirect()->intended('dashboard');
        }

        return redirect()->route('login')->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login')->with('message', 'Successfully singed out.');
    }

    public function loginWithEmail(Request $request): \Illuminate\Http\RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }
}
