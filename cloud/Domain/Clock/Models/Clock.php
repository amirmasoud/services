<?php

namespace Domain\Clock\Models;

use Carbon\Carbon;
use Domain\Users\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;

class Clock extends Model
{
    use HasFactory;
    use Notifiable;

    protected $fillable = [
        'name',
        'order',
    ];

    protected $appends = ['carbon'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getCarbonAttribute()
    {
        return Carbon::now($this->timezone);
    }
}
