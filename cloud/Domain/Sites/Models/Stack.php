<?php

namespace Domain\Sites\Models;

use Domain\IAM\Models\User;
use Domain\Sites\Casts\PropertiesCast;
use Domain\Sites\Enums\StackTypesEnum;
use Domain\Sites\QueryBuilders\StackQueryBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Stack extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;

    protected $casts = [
        'properties' => PropertiesCast::class,
        'type' => StackTypesEnum::class,
    ];

    protected $fillable = ['name', 'properties', 'type'];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty();
    }

    public function newEloquentBuilder($query): StackQueryBuilder
    {
        return new StackQueryBuilder($query);
    }

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function site(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Site::class);
    }
}
