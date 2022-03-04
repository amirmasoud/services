<?php

namespace Support\WordPress\Casts;

use Exception;
use Spatie\DataTransferObject\Caster;
use Support\WordPress\DataTransferObjects\PluginData;

class PluginRatingStarCast implements Caster
{
    /**
     * @throws Exception
     */
    public function cast(mixed $value): int
    {
        if (! is_numeric($value)) {
            throw new Exception("Can only cast numbers");
        }

        return floor($value / 20);
    }
}
