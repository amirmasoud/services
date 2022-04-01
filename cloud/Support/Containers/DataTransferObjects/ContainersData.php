<?php

namespace Support\Containers\DataTransferObjects;

use Spatie\DataTransferObject\Arr;
use Support\Containers\Casts\ContainerArrayCast;
use Spatie\DataTransferObject\DataTransferObject;
use Spatie\DataTransferObject\Attributes\MapFrom;
use Spatie\DataTransferObject\Attributes\CastWith;
use Spatie\DataTransferObject\Exceptions\UnknownProperties;
use Spatie\DataTransferObject\Reflection\DataTransferObjectClass;

class ContainersData extends DataTransferObject
{
    /** @var ContainerData[] */
    #[CastWith(ContainerArrayCast::class)]
    #[MapFrom('containers')]
    public array $containerData = [];
}
