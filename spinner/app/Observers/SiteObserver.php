<?php

namespace App\Observers;

use App\Jobs\StartSite;
use App\Jobs\StopSite;
use App\Models\Site;

class SiteObserver
{
    /**
     * Handle the Site "created" event.
     *
     * @param  \App\Models\Site  $site
     * @return void
     */
    public function created(Site $site)
    {
        StartSite::dispatch($site);
    }

    /**
     * Handle the Site "updated" event.
     *
     * @param  \App\Models\Site  $site
     * @return void
     */
    public function updated(Site $site)
    {
        //
    }

    /**
     * Handle the Site "deleted" event.
     *
     * @param  \App\Models\Site  $site
     * @return void
     */
    public function deleted(Site $site)
    {
        // Not working?
        StopSite::dispatch($site);
    }

    /**
     * Handle the Site "restored" event.
     *
     * @param  \App\Models\Site  $site
     * @return void
     */
    public function restored(Site $site)
    {
        //
    }

    /**
     * Handle the Site "force deleted" event.
     *
     * @param  \App\Models\Site  $site
     * @return void
     */
    public function forceDeleted(Site $site)
    {
        //
    }
}
