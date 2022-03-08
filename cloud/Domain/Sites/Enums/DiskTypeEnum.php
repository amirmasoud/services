<?php

namespace Domain\Sites\Enums;

enum DiskTypeEnum: string
{
    case SSD = 'ssd';
    case HDD = 'hdd';

    public function label(): string
    {
        return match($this) {
            self::SSD => 'SSD',
            self::HDD => 'HDD',
        };
    }
}
