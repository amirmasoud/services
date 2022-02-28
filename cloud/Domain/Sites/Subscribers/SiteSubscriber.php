<?php

namespace Domain\Sites\Subscribers;

class SiteSubscriber
{
    /**
     * Handle user login events.
     */
    public function handleSiteCreated($event) {}

    /**
     * Handle user logout events.
     */
    public function handleUserLogout($event) {}

    /**
     * Register the listeners for the subscriber.
     *
     * @param  \Illuminate\Events\Dispatcher  $events
     * @return array
     */
    public function subscribe($events)
    {
        return [
            //
        ];
    }
}
