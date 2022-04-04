<?php

namespace Support\Containers\DataTransferObjects;

use Support\Containers\Casts\ContainerArrayCast;
use Spatie\DataTransferObject\DataTransferObject;
use Spatie\DataTransferObject\Attributes\MapFrom;
use Spatie\DataTransferObject\Attributes\CastWith;

class ContainersData extends DataTransferObject
{
    /** @var ContainerData[] */
    #[CastWith(ContainerArrayCast::class)]
    #[MapFrom('containers')]
    public array $containerData = [];
}
