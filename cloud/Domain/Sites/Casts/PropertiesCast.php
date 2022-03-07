<?php

namespace Domain\Sites\Casts;

use Domain\Sites\DataTransferObjects\WordPress\WordPressPropertiesData;
use Domain\Sites\DataTransferObjects\WordPress\WordPressServerStackPropertiesData;
use Domain\Sites\DataTransferObjects\WordPress\WordPressServiceStackPropertiesData;
use Domain\Sites\Enums\StackTypesEnum;
use Exception;
use Illuminate\Contracts\Database\Eloquent\Castable;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

class PropertiesCast implements Castable
{
    public static function castUsing(array $arguments): CastsAttributes
    {
        return new class implements CastsAttributes
        {
            public function get($model, $key, $value, $attributes)
            {
                $data = collect(json_decode($value))->toArray();

                return match (StackTypesEnum::tryFrom($attributes['type'])) {
                    StackTypesEnum::SERVER => new WordPressServerStackPropertiesData($data),
                    StackTypesEnum::SERVICE => new WordPressServiceStackPropertiesData($data),
                    StackTypesEnum::WORDPRESS => new WordPressPropertiesData($data),
                    default => throw new Exception('Unexpected match value'),
                };
            }

            public function set($model, $key, $value, $attributes)
            {
                return json_encode($value);
            }
        };
    }
}
