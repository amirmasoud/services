<?php

namespace App\Enums;

enum ContainerStatus: string
{
    case STOPPED = 'stopped';
    case STARTED = 'started';
    case RESTARTING = 'restarting';
    case DELETED = 'deleted';
    case STARTING = 'starting';
    case RUNNING = 'running';

    public function label(): string
    {
        return match($this) {
            self::STOPPED => 'Stopped',
            self::STARTED => 'Started',
            self::RESTARTING => 'Restarting',
            self::DELETED => 'Deleted',
            self::STARTING => 'Starting',
        };
    }
}
