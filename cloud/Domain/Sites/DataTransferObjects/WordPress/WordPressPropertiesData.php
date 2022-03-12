<?php

namespace Domain\Sites\DataTransferObjects\WordPress;

use Spatie\DataTransferObject\DataTransferObject;

class WordPressPropertiesData extends DataTransferObject
{
    public array $plugin = [];

    public string $theme;

    public string $advance = '';

//    public WordPressServiceStackPropertiesData $serviceStack;

//    public WordPressServerStackPropertiesData $serverStack;
}
