<?php

namespace Domain\Users\Models;

use Eloquent;
use Illuminate\Support\Carbon;
use Domain\Users\Casts\SettingsCast;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Query\Builder;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\SoftDeletes;
use Domain\Users\QueryBuilders\UserQueryBuilder;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Domain\Users\DataTransferObjects\UserSettingsData;
use Database\Factories\Domain\Users\Models\UserFactory;
use Illuminate\Notifications\DatabaseNotificationCollection;

/**
 * Domain\Users\Models\User
 *
 * @method static withTrashed()
 * @method static verified()
 * @method static unverified()
 * @property int $id
 * @property string $name
 * @property string $email
 * @property ?string $profile
 * @property ?Carbon $email_verified_at
 * @property string $password
 * @property ?UserSettingsData $settings
 * @property ?string $remember_token
 * @property ?Carbon $deleted_at
 * @property ?Carbon $created_at
 * @property ?Carbon $updated_at
 * @property-read DatabaseNotificationCollection|DatabaseNotification[] $notifications
 * @property-read ?int $notifications_count
 * @property-read Collection|\Spatie\Permission\Models\Permission[] $permissions
 * @property-read ?int $permissions_count
 * @property-read Collection|\Spatie\Permission\Models\Role[] $roles
 * @property-read ?int $roles_count
 * @method static UserFactory factory(...$parameters)
 * @method static UserQueryBuilder|User newModelQuery()
 * @method static UserQueryBuilder|User newQuery()
 * @method static Builder|User onlyTrashed()
 * @method static UserQueryBuilder|User permission($permissions)
 * @method static UserQueryBuilder|User query()
 * @method static UserQueryBuilder|User role($roles, $guard = null)
 * @method static UserQueryBuilder|User search(?string $search)
 * @method static UserQueryBuilder|User whereCreatedAt($value)
 * @method static UserQueryBuilder|User whereDeletedAt($value)
 * @method static UserQueryBuilder|User whereEmail($value)
 * @method static UserQueryBuilder|User whereEmailVerifiedAt($value)
 * @method static UserQueryBuilder|User whereId($value)
 * @method static UserQueryBuilder|User whereName($value)
 * @method static UserQueryBuilder|User wherePassword($value)
 * @method static UserQueryBuilder|User whereProfile($value)
 * @method static UserQueryBuilder|User whereRememberToken($value)
 * @method static UserQueryBuilder|User whereSettings($value)
 * @method static UserQueryBuilder|User whereUpdatedAt($value)
 * @method static Builder|User withoutTrashed()
 * @mixin Eloquent
 */
class User extends Authenticatable
{
    use HasFactory;
    use Notifiable;
    use SoftDeletes;
    use HasRoles;

    protected $fillable = [
        'name',
        'email',
        'password',
        'profile',
        'settings',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'settings' => SettingsCast::class,
    ];

    public static function boot()
    {
        parent::boot();
    }

    public function newEloquentBuilder($query): UserQueryBuilder
    {
        return new UserQueryBuilder($query);
    }
}
