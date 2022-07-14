<?php

namespace Domain\Sites\Models;

use Eloquent;
use Spatie\Tags\HasTags;
use Domain\Users\Models\User;
use Illuminate\Support\Carbon;
use Spatie\Activitylog\LogOptions;
use Domain\Sites\Enums\StackTypeEnum;
use Domain\Sites\Casts\PropertiesCast;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Domain\Sites\QueryBuilders\StackQueryBuilder;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;

/**
 * Domain\Sites\Models\Stack
 *
 * @property array<Site> $sites
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property int $price
 * @property mixed|null $properties
 * @property StackTypeEnum $type
 * @property ?Carbon $deleted_at
 * @property ?Carbon $created_at
 * @property ?Carbon $updated_at
 * @property-read EloquentCollection|\Spatie\Activitylog\Models\Activity[] $activities
 * @property-read ?int $activities_count
 * @property EloquentCollection|\Spatie\Tags\Tag[] $tags
 * @property-read ?int $sites_count
 * @property-read ?int $tags_count
 * @property-read User $user
 * @method static StackQueryBuilder|Stack newModelQuery()
 * @method static StackQueryBuilder|Stack newQuery()
 * @method static QueryBuilder|Stack onlyTrashed()
 * @method static StackQueryBuilder|Stack query()
 * @method static StackQueryBuilder|Stack whereCreatedAt($value)
 * @method static StackQueryBuilder|Stack whereDeletedAt($value)
 * @method static StackQueryBuilder|Stack whereId($value)
 * @method static StackQueryBuilder|Stack whereName($value)
 * @method static StackQueryBuilder|Stack wherePrice($value)
 * @method static StackQueryBuilder|Stack whereProperties($value)
 * @method static StackQueryBuilder|Stack whereType($value)
 * @method static StackQueryBuilder|Stack whereUpdatedAt($value)
 * @method static StackQueryBuilder|Stack whereUserId($value)
 * @method static StackQueryBuilder|Stack withAllTags(\ArrayAccess|\Spatie\Tags\Tag|array $tags, ?string $type = null)
 * @method static StackQueryBuilder|Stack withAllTagsOfAnyType($tags)
 * @method static StackQueryBuilder|Stack withAnyTags(\ArrayAccess|\Spatie\Tags\Tag|array $tags, ?string $type = null)
 * @method static StackQueryBuilder|Stack withAnyTagsOfAnyType($tags)
 * @method static QueryBuilder|Stack withTrashed()
 * @method static QueryBuilder|Stack withoutTrashed()
 * @method static StackQueryBuilder|Stack wordpressStacks()
 * @mixin Eloquent
 */
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
        'type' => StackTypeEnum::class,
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function sites(): HasMany
    {
        return $this->hasMany(Site::class);
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
