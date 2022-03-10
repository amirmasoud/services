<?php

namespace Domain\IAM\Models;

use Domain\IAM\QueryBuilders\UserQueryBuilder;
use Domain\Sites\Models\Server;
use Domain\Sites\Models\Site;
use Domain\Sites\Models\Stack;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function servers(): HasMany
    {
        return $this->hasMany(Server::class);
    }

    public function stacks(): HasMany
    {
        return $this->hasMany(Stack::class);
    }

    public function sites(): HasMany
    {
        return $this->hasMany(Site::class);
    }

    public function newEloquentBuilder($query): UserQueryBuilder
    {
        return new UserQueryBuilder($query);
    }
}
