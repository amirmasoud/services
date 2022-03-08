<?php

namespace Domain\Sites\Enums;

enum DiskUnitEnum: string
{
    case MB = 'gb';
    case GB = 'mb';
    case TB = 'tb';

    public function label(): string
    {
        return match($this) {
            self::MB => 'MegaBytes',
            self::GB => 'GigaBytes',
            self::TB => 'TeraBytes',
        };
    }
}
