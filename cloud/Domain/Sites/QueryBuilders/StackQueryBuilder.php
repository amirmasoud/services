<?php

namespace Domain\Sites\QueryBuilders;

use Domain\Sites\Enums\StackTypesEnum;
use Illuminate\Database\Eloquent\Builder;

class StackQueryBuilder extends Builder
{
    public function serverStacks(): StackQueryBuilder
    {
        return $this->where('type', StackTypesEnum::SERVER);
    }

    public function serviceStacks(): StackQueryBuilder
    {
        return $this->where('type', StackTypesEnum::SERVICE);
    }

    public function wordpressStacks(): StackQueryBuilder
    {
        return $this->where('type', StackTypesEnum::WORDPRESS);
    }
}
