<?php

namespace Support\WordPress\Casts;

use Exception;
use Spatie\DataTransferObject\Caster;
use Support\WordPress\DataTransferObjects\PluginData;

class NumberFormatCast implements Caster
{
    /**
     * @throws Exception
     */
    public function cast(mixed $value): string
    {
        if (! is_numeric($value)) {
            throw new Exception("Can only cast numbers");
        }

        return number_format($value);
    }
}
