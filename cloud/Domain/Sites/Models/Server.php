<?php

namespace Domain\Sites\Models;

use Eloquent;
use ArrayAccess;
use Spatie\Tags\Tag;
use Spatie\Tags\HasTags;
use Domain\Users\Models\User;
use Illuminate\Support\Carbon;
use Spatie\Activitylog\LogOptions;
use Domain\Sites\Enums\RamUnitEnum;
use Domain\Sites\Enums\DiskTypeEnum;
use Domain\Sites\Enums\DiskUnitEnum;
use Domain\Sites\Enums\OsFlavorEnum;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Domain\Sites\Enums\ServerStatusEnum;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;

/**
 * Domain\Sites\Models\Server
 *
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property int $price
 * @property string $ip
 * @property int $port
 * @property string $ram
 * @property RamUnitEnum $ram_unit
 * @property string $cpu
 * @property string $disk
 * @property DiskTypeEnum $disk_type
 * @property DiskUnitEnum $disk_unit
 * @property OsFlavorEnum $os
 * @property string $os_version
 * @property ServerStatusEnum $status
 * @property ?string $notes
 * @property ?Carbon $deleted_at
 * @property ?Carbon $created_at
 * @property ?Carbon $updated_at
 * @property-read Collection|Activity[] $activities
 * @property-read ?int $activities_count
 * @property Collection|Tag[] $tags
 * @property-read int|null $tags_count
 * @property-read User $user
 * @method static EloquentBuilder|Server newModelQuery()
 * @method static EloquentBuilder|Server newQuery()
 * @method static Builder|Server onlyTrashed()
 * @method static EloquentBuilder|Server query()
 * @method static EloquentBuilder|Server whereCpu($value)
 * @method static EloquentBuilder|Server whereCreatedAt($value)
 * @method static EloquentBuilder|Server whereDeletedAt($value)
 * @method static EloquentBuilder|Server whereDisk($value)
 * @method static EloquentBuilder|Server whereDiskType($value)
 * @method static EloquentBuilder|Server whereDiskUnit($value)
 * @method static EloquentBuilder|Server whereId($value)
 * @method static EloquentBuilder|Server whereIp($value)
 * @method static EloquentBuilder|Server whereName($value)
 * @method static EloquentBuilder|Server whereNotes($value)
 * @method static EloquentBuilder|Server whereOs($value)
 * @method static EloquentBuilder|Server whereOsVersion($value)
 * @method static EloquentBuilder|Server wherePort($value)
 * @method static EloquentBuilder|Server wherePrice($value)
 * @method static EloquentBuilder|Server whereRam($value)
 * @method static EloquentBuilder|Server whereRamUnit($value)
 * @method static EloquentBuilder|Server whereStatus($value)
 * @method static EloquentBuilder|Server whereUpdatedAt($value)
 * @method static EloquentBuilder|Server whereUserId($value)
 * @method static EloquentBuilder|Server withAllTags(ArrayAccess|Tag|array $tags, ?string $type = null)
 * @method static EloquentBuilder|Server withAllTagsOfAnyType($tags)
 * @method static EloquentBuilder|Server withAnyTags(ArrayAccess|Tag|array $tags, ?string $type = null)
 * @method static EloquentBuilder|Server withAnyTagsOfAnyType($tags)
 * @method static QueryBuilder|Server withTrashed()
 * @method static QueryBuilder|Server withoutTrashed()
 * @mixin Eloquent
 */
class Server extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;
    use HasTags;

    protected $fillable = [
        'name',
        'price',
        'ip',
        'port',
        'ram',
        'ram_unit',
        'cpu',
        'disk',
        'disk_type',
        'disk_unit',
        'os',
        'os_version',
        'status',
        'notes',
    ];

    protected $casts = [
        'price' => 'integer',
        'port' => 'integer',
        'ram_unit' => RamUnitEnum::class,
        'disk_type' => DiskTypeEnum::class,
        'disk_unit' => DiskUnitEnum::class,
        'os' => OsFlavorEnum::class,
        'status' => ServerStatusEnum::class,
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty();
    }
}
