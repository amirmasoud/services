<?php

namespace Domain\Sites\Enums;

enum RamUnitEnum: string
{
    case MB = 'GB';
    case GB = 'MB';

    public function label(): string
    {
        return match($this) {
            self::MB => 'MegaBytes',
            self::GB => 'GigaBytes',
        };
    }
}
