<?php

namespace Support\Containers\DataTransferObjects;

use Support\Containers\Casts\PublisherArrayCast;
use Spatie\DataTransferObject\DataTransferObject;
use Spatie\DataTransferObject\Attributes\MapFrom;
use Spatie\DataTransferObject\Attributes\CastWith;

class ContainerData extends DataTransferObject
{
    #[MapFrom('ID')]
    public string $id;

    #[MapFrom('Name')]
    public string $name;

    #[MapFrom('Command')]
    public string $command;

    #[MapFrom('Project')]
    public string $project;

    #[MapFrom('Service')]
    public string $service;

    #[MapFrom('State')]
    public string $state;

    #[MapFrom('Health')]
    public string $health;

    #[MapFrom('ExitCode')]
    public int $exitCode;

    /** @var PublisherData[] */
    #[MapFrom('Publishers')]
    #[CastWith(PublisherArrayCast::class)]
    public ?array $publisherData = [];
}
