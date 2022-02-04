<?php

use App\Http\Controllers\OauthController;
use App\Models\User;
use App\UI\DashboardHeading\Button as DashboardHeadingButton;
use App\UI\DashboardHeading\Item as DashboardHeadingItem;
use Illuminate\Support\Facades\Request;
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

    Route::get('/users', function () {
        $users = \App\Models\User::query()
                                 ->when(Request::input('search'), fn ($query, $search) => $query->where('name', 'LIKE', '%'.$search.'%'))
                                 ->paginate()
                                 ->withQueryString();

        return Inertia::render('Dashboard/Users/Index', [
            'users' => \App\Http\Resources\UserResource::collection($users),
            'filters' => Request::only('search'),
            'table' => [
                'fields' => [
                    [
                        'name' => 'name',
                        'label' => 'name',
                    ],
                    [
                        'name' => 'email',
                        'label' => 'Email',
                    ],
                    [
                        'name' => 'email_verified_at',
                        'label' => 'email_verified_at',
                    ]
                ],
                'actions' => [
                    [
                        'name' => 'edit',
                        'label' => 'Edit',
                        'dialog' => [
                            'title' => 'Deactivate account',
                            'body' => 'Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.',
                            'buttons' => DashboardHeadingButton::collection([
                                [
                                    'link' => '/dashboard/users/{user}/edit',
                                    'label' => 'Deactivate',
                                ],
                                [
                                    'label' => 'Cancel',
                                ]
                            ])
                        ]
                    ],
                    [
                        'name' => 'delete',
                        'label' => 'Delete',
                        // 'link' => '/dashboard/users/{user}/delete',
                        'buttons' => DashboardHeadingButton::collection([
                            [
                                'link' => '/dashboard/users/{user}/edit',
                                'label' => 'Deactivate',
                            ],
                            [
                                'label' => 'Cancel',
                            ]
                        ])
                    ],
                ],
            ],
            'dashboardHeadings' => [
                'items' => DashboardHeadingItem::collection([
                    [
                        'link' => '/dashboard',
                        'label' => 'Dashboard',
                    ],
                    [
                        'link' => '/dashboard/users',
                        'label' => 'Users',
                    ],
                    [
                        'link' => '#',
                        'label' => 'List',
                    ],
                ]),
                'buttons' => DashboardHeadingButton::collection([
                    [
                        'link' => '/dashboard/users/create',
                        'label' => 'Create a New User',
                    ]
                ])
            ]
        ]);
    });

    Route::post('/users', [\App\Http\Controllers\Dashboard\UserController::class, 'store']);

    Route::get('/users/create', function () {
        return Inertia::render('Dashboard/Users/Create');
    });

    Route::get('/users/{user}/edit', function (User $user) {
        return Inertia::render('Dashboard/Users/Edit', [
            'resource' => new \App\Http\Resources\UserResource($user),
        ]);
    });

    Route::get('/users/{user}/delete', function (User $user) {
        $user->delete();

        return redirect()->back();
    });

    Route::get('/settings', function () {
        shell_exec('cd ' . env('SITES_PATH') . '/cloud && docker-compose up -d');
        unlink(env('SITES_PATH') . '/amirmasoud/docker-compose.yml');
        unlink(env('SITES_PATH') . '/amirmasoud/.env');
        \Touhidurabir\StubGenerator\Facades\StubGenerator::from(app_path('Stubs/wordpress.stub'), asFullPath: true) // the stub file path
                                                         ->to(env('SITES_PATH') . '/amirmasoud', createIfNotExist: true, asFullPath: true) // the store directory path
                                                         ->as('docker-compose') // the generatable file name without extension
                                                         ->ext('yml')
                                                         ->withReplacers([
                                                             'version' => '3.7',
                                                             'name' => 'amirmasoud',
                                                         ]) // the stub replacing params
                                                         ->save(); // save the file
        \Touhidurabir\StubGenerator\Facades\StubGenerator::from(app_path('Stubs/wordpress.env.stub'), asFullPath: true) // the stub file path
                                                         ->to(env('SITES_PATH') . '/amirmasoud', createIfNotExist: true, asFullPath: true) // the store directory path
                                                         ->as('.env', hasExtension: false) // the generatable file name without extension
                                                         ->withReplacers([
                                                            'name' => 'amirmasoud',
                                                            'site_url' => 'https://amirmasoud.test',
                                                            'host' => 'amirmasoud.test',
                                                         ]) // the stub replacing params
                                                         ->save(); // save the file

        shell_exec('cd ' . env('SITES_PATH') . '/amirmasoud && docker-compose up -d');

        return Inertia::render('Dashboard/Settings', [
            // 'test' => (shell_exec('cd ' . env('PROXY_PATH') . ' && docker-compose ps')),
            // 'test' => \Illuminate\Support\Facades\Http::get(env('DOCKER_API') . '/containers/json')->body()
            'test' => shell_exec('cd ' . env('PROXY_PATH') . ' && docker-compose up -d'),
        ]);
    });

    Route::get('/sites', function () {
        $sites = \App\Models\Site::query()
                                 ->when(Request::input('search'), fn ($query, $search) => $query->where('name', 'LIKE', '%'.$search.'%'))
                                 ->paginate()
                                 ->withQueryString();

        return Inertia::render('Dashboard/Sites/Index', [
            'sites' => \App\Http\Resources\SiteResource::collection($sites),
            'filters' => Request::only('search'),
            'table' => [
                'fields' => [
                    [
                        'name' => 'name',
                        'label' => 'name',
                    ],
                    [
                        'name' => 'host',
                        'label' => 'Host',
                    ],
                ],
                'actions' => [
                    [
                        'name' => 'edit',
                        'label' => 'Edit',
                        'dialog' => [
                            'title' => 'Deactivate account',
                            'body' => 'Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.',
                            'buttons' => DashboardHeadingButton::collection([
                                [
                                    'link' => '/dashboard/users/{user}/edit',
                                    'label' => 'Deactivate',
                                ],
                                [
                                    'label' => 'Cancel',
                                ]
                            ])
                        ]
                    ],
                    [
                        'name' => 'delete',
                        'label' => 'Delete',
                        // 'link' => '/dashboard/users/{user}/delete',
                        'buttons' => DashboardHeadingButton::collection([
                            [
                                'link' => '/dashboard/users/{user}/edit',
                                'label' => 'Deactivate',
                            ],
                            [
                                'label' => 'Cancel',
                            ]
                        ])
                    ],
                ],
            ],
            'dashboardHeadings' => [
                'items' => DashboardHeadingItem::collection([
                    [
                        'link' => '/dashboard',
                        'label' => 'Dashboard',
                    ],
                    [
                        'link' => '/dashboard/users',
                        'label' => 'Users',
                    ],
                    [
                        'link' => '#',
                        'label' => 'List',
                    ],
                ]),
                'buttons' => DashboardHeadingButton::collection([
                    [
                        'link' => '/dashboard/users/create',
                        'label' => 'Create a New User',
                    ]
                ])
            ]
        ]);
    });

    Route::post('/users', [\App\Http\Controllers\Dashboard\UserController::class, 'store']);

    Route::get('/users/create', function () {
        return Inertia::render('Dashboard/Users/Create');
    });

    Route::get('/users/{user}/edit', function (User $user) {
        return Inertia::render('Dashboard/Users/Edit', [
            'resource' => new \App\Http\Resources\UserResource($user),
        ]);
    });

    Route::get('/users/{user}/delete', function (User $user) {
        $user->delete();

        return redirect()->back();
    });
});

Route::get('/', function () {
//    docker network create proxy
    echo shell_exec('cd ' . env('PROXY_PATH') . ' && docker-compose up -d');
    echo shell_exec('cd ' . env('PROXY_PATH') . ' && mkcert -cert-file certificates/amirmasoud-cert.pem -key-file certificates/amirmasoud-key.pem "amirmasoud.test" "*.amirmasoud.test"');
    echo shell_exec('cd ' . env('PROXY_PATH') . ' && mkcert -cert-file certificates/cloud-cert.pem -key-file certificates/cloud-key.pem "cloud.test" "*.cloud.test"');
    echo shell_exec('cd ' . env('SITES_PATH') . '/amirmasoud && docker-compose up -d');
    echo shell_exec('cd ' . env('SITES_PATH') . '/cloud && docker-compose up -d');

    return view('welcome');
});
