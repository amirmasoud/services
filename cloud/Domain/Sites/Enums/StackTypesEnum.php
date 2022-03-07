<?php

namespace Domain\Sites\Enums;

enum StackTypesEnum: string
{
    // Basic
    case SERVER = 'server';
    case SERVICE = 'service';

    case WORDPRESS = 'wordpress';

    public function label(): string
    {
        return match($this) {
            self::SERVER => 'Server',
            self::SERVICE => 'Service',
            self::WORDPRESS => 'WordPress',
        };
    }
}
