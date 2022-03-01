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

    public function handleSiteDeleted(Site $site)
    {
        ProcessContainer::for($site)->stop();
    }

    public function subscribe($events): array
    {
        return [
            'eloquent.created: Domain\Sites\Models\Site' => 'handleSiteCreated',
            'eloquent.deleted: Domain\Sites\Models\Site' => 'handleSiteDeleted',
        ];
    }
}
