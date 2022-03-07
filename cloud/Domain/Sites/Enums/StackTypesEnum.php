<?php

namespace Domain\Sites\Enums;

enum StackTypesEnum: string
{
    // Basic
    case SERVER = 'email';
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

    public function value(): string
    {
        return match($this) {
            self::SERVER => \Domain\Sites\Enums\StackTypes\ServerStackType::class,
            self::SERVICE => \Domain\Sites\Enums\StackTypes\ServiceStackType::class,
            self::WORDPRESS => \Domain\Sites\Enums\StackTypes\WordPressStackType::class,
        };
    }
}
