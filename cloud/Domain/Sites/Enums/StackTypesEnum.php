<?php

namespace Domain\Sites\Enums;

enum StackTypesEnum: string
{
    case WORDPRESS = 'wordpress';

    public function label(): string
    {
        return match($this) {
            self::WORDPRESS => 'WordPress',
        };
    }
}
