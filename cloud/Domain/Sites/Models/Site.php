<?php

namespace Domain\Sites\Models;

use Domain\IAM\Models\User;
use Domain\Sites\QueryBuilders\SiteQueryBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;
use Support\Containers\Enums\ContainerState;

class Site extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;

    protected $fillable = [
        'name',
        'host',
        'status',
    ];

    protected $casts = [
        'status' => ContainerState::class,
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
