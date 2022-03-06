<?php

namespace Domain\Sites\Subscribers;

use Domain\Sites\Models\Site;
use Support\Containers\ProcessContainer;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Contracts\Queue\ShouldBeUniqueUntilProcessing;

class SiteSubscriber implements ShouldQueue, ShouldBeUniqueUntilProcessing
{
    public function handleSiteCreated(Site $site)
    {
        ProcessContainer::for($site)->init()->start();
    }

    public function handleSiteDeleted(Site $site)
    {
        ProcessContainer::for($site)->stop();
    }

    public function handleSiteStarted(Site $site)
    {
        ProcessContainer::for($site)->start();
    }

    public function handleSiteStopped(Site $site)
    {
        ProcessContainer::for($site)->stop();
    }

    public function handleSiteRestarted(Site $site)
    {
        ProcessContainer::for($site)->restart();
    }

    public function subscribe($events): array
    {
        return [
            'eloquent.created: Domain\Sites\Models\Site' => 'handleSiteCreated',
            'eloquent.deleted: Domain\Sites\Models\Site' => 'handleSiteDeleted',
            'eloquent.started: Domain\Sites\Models\Site' => 'handleSiteStarted',
            'eloquent.stopped: Domain\Sites\Models\Site' => 'handleSiteStopped',
            'eloquent.restarted: Domain\Sites\Models\Site' => 'handleSiteRestarted',
        ];
    }
}
