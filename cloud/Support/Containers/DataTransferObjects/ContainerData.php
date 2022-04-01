<?php

namespace Support\Containers\DataTransferObjects;

use Spatie\DataTransferObject\Arr;
use Support\WordPress\Casts\ThemeArrayCaster;
use Support\Containers\Casts\PublisherArrayCast;
use Spatie\DataTransferObject\DataTransferObject;
use Spatie\DataTransferObject\Attributes\MapFrom;
use Spatie\DataTransferObject\Attributes\CastWith;
use Support\WordPress\DataTransferObjects\ThemeData;
use Spatie\DataTransferObject\Exceptions\UnknownProperties;
use Spatie\DataTransferObject\Reflection\DataTransferObjectClass;

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
