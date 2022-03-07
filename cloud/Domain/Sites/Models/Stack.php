<?php

namespace Domain\Sites\Models;

use Domain\Sites\Enums\StackTypesEnum;
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
        'properties' => 'collection',
        'type' => StackTypesEnum::class,
    ];

    protected $fillable = ['name', 'properties', 'type'];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty();
    }
}
