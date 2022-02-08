<?php

namespace App\Models;

use App\Enums\ContainerStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

/**
 * App\Models\Site
 *
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property string $host
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Site newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Site newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Site query()
 * @method static \Illuminate\Database\Eloquent\Builder|Site whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Site whereHost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Site whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Site whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Site whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Site whereUserId($value)
 * @mixin \Eloquent
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
    ];

    protected $casts = [
        'status' => ContainerStatus::class,
    ];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
                         ->logOnlyDirty();
    }
}
