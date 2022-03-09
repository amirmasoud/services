<?php

namespace Domain\Sites\Models;

use Domain\IAM\Models\User;
use Domain\Sites\Casts\PropertiesCast;
use Domain\Sites\Enums\StackTypesEnum;
use Domain\Sites\QueryBuilders\StackQueryBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Tags\HasTags;

class Stack extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;
    use HasTags;

    protected $fillable = [
        'name',
        'price',
        'properties',
        'type',
    ];

    protected $casts = [
        'price' => 'integer',
        'properties' => PropertiesCast::class,
        'type' => StackTypesEnum::class,
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function site(): BelongsTo
    {
        return $this->belongsTo(Site::class);
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty();
    }

    public function newEloquentBuilder($query): StackQueryBuilder
    {
        return new StackQueryBuilder($query);
    }
}
