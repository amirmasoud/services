<?php

namespace Domain\Sites\Enums;

enum SiteStatusEnum: string
{
    case ACTIVE = 'active';
    case SUSPENDED = 'suspended';
    case OFFLINE = 'offline';
    case IDLE = 'idle';

    public function label(): string
    {
        return match($this) {
            self::IDLE => 'Idle',
            self::ACTIVE => 'Active',
            self::SUSPENDED => 'Suspended',
            self::OFFLINE => 'Offline',
        };
    }
}
