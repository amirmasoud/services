<?php

namespace Domain\IAM\Enums;

enum ProviderEnum: string
{
    case EMAIL = 'email';
    case GITHUB = 'github';
    case GOOGLE = 'google';
    case FACEBOOK = 'facebook';

    public function label(): string
    {
        return match($this) {
            self::EMAIL => 'Email',
            self::GITHUB => 'GitHub',
            self::GOOGLE => 'Google',
            self::FACEBOOK => 'Facebook',
        };
    }
}
