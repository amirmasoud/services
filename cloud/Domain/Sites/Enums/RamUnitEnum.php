<?php

namespace Domain\Sites\Enums;

enum RamUnitEnum: string
{
    case MB = 'gb';
    case GB = 'mb';

    public function label(): string
    {
        return match($this) {
            self::MB => 'MegaBytes',
            self::GB => 'GigaBytes',
        };
    }
}
