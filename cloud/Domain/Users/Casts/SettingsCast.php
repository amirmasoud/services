<?php

namespace Domain\Users\Casts;

use Domain\Users\DataTransferObjects\UserSettingsData;
use Domain\Users\Enums\DateFormatEnum;
use Domain\Users\Enums\LocaleEnum;
use Illuminate\Contracts\Database\Eloquent\Castable;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

class SettingsCast implements Castable
{
    public static function castUsing(array $arguments): CastsAttributes
    {
        return new class implements CastsAttributes {
            public function get($model, $key, $value, $attributes): UserSettingsData
            {
                return new UserSettingsData(LocaleEnum::EN_US, LocaleEnum::EN_US->label(), DateFormatEnum::YYYY_MM_DD, DateFormatEnum::YYYY_MM_DD->label());
            }

            public function set($model, $key, $value, $attributes): bool|string
            {
                return json_encode($value);
            }
        };
    }
}
