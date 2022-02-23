<?php

namespace App\DTOs;

use Spatie\DataTransferObject\Attributes\MapFrom;
use Spatie\DataTransferObject\DataTransferObject;

class PortDTO extends DataTransferObject
{
    #[MapFrom('PrivatePort')]
    public string $port;

    #[MapFrom('Type')]
    public string $type;
}
