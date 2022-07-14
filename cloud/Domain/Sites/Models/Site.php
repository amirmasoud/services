<?php

namespace Domain\Sites\Models;

use Eloquent;
use Domain\Users\Models\User;
use Illuminate\Support\Carbon;
use Spatie\Activitylog\LogOptions;
use Domain\Sites\Enums\SiteStatusEnum;
use Illuminate\Database\Query\Builder;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\SoftDeletes;
use Domain\Sites\QueryBuilders\SiteQueryBuilder;
use Support\Containers\Enums\ContainerStateEnum;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Domain\Sites\Models\Site
 *
 * @property string $name
 * @property string $host
 * @property ContainerStateEnum $status
 * @property ?int $server_id
 * @property ?int $stack_id
 * @method static healthy()
 * @method static unhealthy()
 * @property int $id
 * @property int $user_id
 * @property ?string $notes
 * @property ?Carbon $deleted_at
 * @property ?Carbon $created_at
 * @property ?Carbon $updated_at
 * @property-read Collection|Activity[] $activities
 * @property-read ?int $activities_count
 * @property-read ?Server $server
 * @property-read ?Stack $stack
 * @property-read User $user
 * @method static SiteQueryBuilder|Site newModelQuery()
 * @method static SiteQueryBuilder|Site newQuery()
 * @method static Builder|Site onlyTrashed()
 * @method static SiteQueryBuilder|Site query()
 * @method static SiteQueryBuilder|Site search(?string $search)
 * @method static SiteQueryBuilder|Site whereCreatedAt($value)
 * @method static SiteQueryBuilder|Site whereDeletedAt($value)
 * @method static SiteQueryBuilder|Site whereHost($value)
 * @method static SiteQueryBuilder|Site whereId($value)
 * @method static SiteQueryBuilder|Site whereName($value)
 * @method static SiteQueryBuilder|Site whereNotes($value)
 * @method static SiteQueryBuilder|Site whereServerId($value)
 * @method static SiteQueryBuilder|Site whereStackId($value)
 * @method static SiteQueryBuilder|Site whereStatus($value)
 * @method static SiteQueryBuilder|Site whereUpdatedAt($value)
 * @method static SiteQueryBuilder|Site whereUserId($value)
 * @method static Builder|Site withTrashed()
 * @method static Builder|Site withoutTrashed()
 * @mixin Eloquent
 */
class Site extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;

    protected $fillable = [
        'name',
        'host',
        'status',
        'server_id',
        'stack_id',
    ];

    protected $casts = [
        'status' => SiteStatusEnum::class,
    ];

    protected $observables = [
        'started',
        'stopped',
        'restarted',
    ];

    public function stack(): belongsTo
    {
        return $this->belongsTo(Stack::class);
    }

    public function server(): belongsTo
    {
        return $this->belongsTo(Server::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty();
    }

    public function newEloquentBuilder($query): SiteQueryBuilder
    {
        return new SiteQueryBuilder($query);
    }
}
