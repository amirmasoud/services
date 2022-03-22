<?php

namespace Support\Containers\DataTransferObjects;

use Support\Containers\Casts\CarbonCaster;
use Spatie\DataTransferObject\DataTransferObject;
use Spatie\DataTransferObject\Attributes\MapFrom;
use Spatie\DataTransferObject\Attributes\CastWith;

class RunningContainerData extends DataTransferObject
{
    #[MapFrom('Id')]
    public ?string $id;

    #[MapFrom('Names.0')]
    public ?string $name;

    #[MapFrom('Image')]
    public ?string $image;

    #[MapFrom('ImageID')]
    public ?string $imageId;

    #[MapFrom('Command')]
    public ?string $command;

    #[MapFrom('Created')]
    #[CastWith(CarbonCaster::class, format: 'Y-m-d H:i:s')]
    public ?string $created;

    #[MapFrom('Ports.0')]
    public ?PortData $publicPort;

    #[MapFrom('Ports.1')]
    public ?PortData $privatePort;

    #[MapFrom('Labels')]
    public $labels;

    #[MapFrom('State')]
    public ?string $state;

    #[MapFrom('Status')]
    public ?string $status;
}
