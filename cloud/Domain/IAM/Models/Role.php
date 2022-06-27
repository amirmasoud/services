<?php

namespace Domain\IAM\Models;

use Domain\IAM\QueryBuilders\RoleQueryBuilder;

class Role extends \Spatie\Permission\Models\Role
{
    public function newEloquentBuilder($query): RoleQueryBuilder
    {
        return new RoleQueryBuilder($query);
    }
}
