<?php

namespace Domain\Stacks\Models;

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
        'configs' => 'collection',
    ];

    protected $fillable = ['name', 'configs'];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty();
    }
}
