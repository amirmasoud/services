<?php

namespace Domain\Sites\DataTransferObjects\WordPress;

use Spatie\DataTransferObject\DataTransferObject;

class WordPressPropertiesData extends DataTransferObject
{
    public array $plugins = [];

    public string $theme = '';

    public array|string $commands = [];
}
