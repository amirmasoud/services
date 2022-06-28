<?php

namespace Domain\Sites\Models;

use Domain\IAM\Models\User;
use Domain\Sites\Enums\SiteStatusEnum;
use Domain\Sites\QueryBuilders\SiteQueryBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Support\Containers\Enums\ContainerStateEnum;

/**
 * @property string $name
 * @property string $host
 * @property ContainerStateEnum $status
 * @property ?int $server_id
 * @property ?int $stack_id
 *
 * @method static healthy()
 * @method static unhealthy()
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
