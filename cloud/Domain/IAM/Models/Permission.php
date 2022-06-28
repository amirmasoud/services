<?php

namespace Domain\IAM\Models;

use Domain\IAM\QueryBuilders\PermissionQueryBuilder;

class Permission extends \Spatie\Permission\Models\Permission
{
    public function newEloquentBuilder($query): PermissionQueryBuilder
    {
        return new PermissionQueryBuilder($query);
    }
}
