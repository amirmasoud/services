<?php

namespace Domain\IAM\QueryBuilders;

use Illuminate\Database\Eloquent\Builder;

class UserQueryBuilder extends Builder
{
    public function search(?string $search)
    {
        return $this->when($search,
            fn ($query, $search) => $query->where(
                fn ($query) => $query->where('name', 'like', "%{$search}%")->orWhere('email', 'like', "%{$search}%")
            )
        );
    }
}
