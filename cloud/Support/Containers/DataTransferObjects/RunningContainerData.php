<?php

namespace Support\Containers\DataTransferObjects;

use Spatie\DataTransferObject\Attributes\CastWith;
use Spatie\DataTransferObject\Attributes\MapFrom;
use Spatie\DataTransferObject\DataTransferObject;
use Support\Containers\Casts\CarbonCaster;

class RunningContainerData extends DataTransferObject
{
    #[MapFrom('Id')]
    public string $id;

    #[MapFrom('Names.0')]
    public string $name;

    #[MapFrom('Image')]
    public string $image;

    #[MapFrom('ImageID')]
    public string $imageId;

    #[MapFrom('Command')]
    public string $command;

    #[MapFrom('Created')]
    #[CastWith(CarbonCaster::class, format: 'Y-m-d H:i:s')]
    public string $created;

    #[MapFrom('Ports.0')]
    public ?PortDTO $publicPort;

    #[MapFrom('Ports.1')]
    public ?PortDTO $privatePort;

    #[MapFrom('Labels')]
    public $labels;

    #[MapFrom('State')]
    public string $state;

    #[MapFrom('Status')]
    public string $status;

    // public $HostConfig;
    // public $NetworkSettings;
    // public $Mounts;
}
