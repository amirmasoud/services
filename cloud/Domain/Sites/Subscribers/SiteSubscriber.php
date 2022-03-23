<?php

namespace Domain\Sites\Subscribers;

use Domain\Sites\Models\Site;
use Illuminate\Support\Facades\Bus;
use Support\Containers\ProcessContainer;
use Illuminate\Contracts\Queue\ShouldQueue;
use Support\Containers\Services\TraefikService;
use Illuminate\Contracts\Queue\ShouldBeUniqueUntilProcessing;

class SiteSubscriber implements ShouldQueue, ShouldBeUniqueUntilProcessing
{
    /**
     * @throws \Support\Containers\Exceptions\DockerComposePathNotDirectoryException
     * @throws \Support\Containers\Exceptions\DockerComposeMissingException
     */
    public function handleSiteCreated(Site $site)
    {
        $site->load('stack');

        $email = $site->user->email;
        $url = "https://$site->host";
        $title = "$site->name WordPress Site";
        $password = "secret";

        $plugins = implode(' ', $site->stack->properties->plugins);
        $theme = $site->stack->properties->theme;

        Bus::chain([
            TraefikService::deploySwarm(),
            // ProcessContainer::for($site)->init(),
            // ProcessContainer::for($site)->start(),
            /**
             *  Install WordPress
             * @todo Setting password as "secret" is not a good idea.
             */
            // ProcessContainer::for($site)->exec("wordpress-cli wp core install --url=$url --title=\"$title\" --admin_user='admin' --admin_email=$email --admin_password=\"$password\""),
            // ProcessContainer::for($site)->exec("wordpress-cli wp core update"),
            // ProcessContainer::for($site)->exec("wordpress-cli wp theme install $theme --activate"),
            // ProcessContainer::for($site)->exec("wordpress-cli wp plugin install $plugins --activate"),
        ]);
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
