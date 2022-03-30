<?php

namespace Domain\Sites\Policies;

use Domain\IAM\Models\User;
use Domain\Sites\Models\Stack;
use Illuminate\Auth\Access\HandlesAuthorization;

class SitePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        return true;
    }

    public function view(User $user, Stack $stack)
    {
        return true;
    }

    public function create(User $user)
    {
        return $user->stacks()->count() && $user->servers()->count();
    }

    public function update(User $user, Stack $stack)
    {
        return true;
    }

    public function delete(User $user, Stack $stack)
    {
        return true;
    }

    public function restore(User $user, Stack $stack)
    {
        return true;
    }

    public function forceDelete(User $user, Stack $stack)
    {
        return true;
    }
}
