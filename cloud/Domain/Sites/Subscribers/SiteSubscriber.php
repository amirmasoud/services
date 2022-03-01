<?php

namespace Domain\Sites\Subscribers;

use Domain\Sites\Models\Site;
use Illuminate\Contracts\Queue\ShouldQueue;
use Support\Containers\ProcessContainer;

class SiteSubscriber implements ShouldQueue
{
    public function handleSiteCreated(Site $site)
    {
        ProcessContainer::for($site)->init()->start();
    }

    public function subscribe($events)
    {
        return [
            'eloquent.created: Domain\Sites\Models\Site' => 'handleSiteCreated',
        ];
    }
}
