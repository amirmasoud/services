<?php

namespace Domain\Sites\QueryBuilders;

use Domain\Sites\Enums\StackTypesEnum;
use Illuminate\Database\Eloquent\Builder;

class StackQueryBuilder extends Builder
{
    public function wordpressStacks(): StackQueryBuilder
    {
        return $this->where('type', StackTypesEnum::WORDPRESS);
    }
}
