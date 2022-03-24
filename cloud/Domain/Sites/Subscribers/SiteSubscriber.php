<?php

namespace Domain\Sites\Subscribers;

use Support\Shell;
use Domain\Sites\Models\Site;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Bus;
use Support\Containers\ProcessContainer;
use Illuminate\Contracts\Queue\ShouldQueue;
use Support\Containers\Services\TraefikService;
use Support\Containers\Services\WordPressService;
use Illuminate\Contracts\Queue\ShouldBeUniqueUntilProcessing;

class SiteSubscriber implements ShouldQueue, ShouldBeUniqueUntilProcessing
{
    /**
     * The number of times the job may be attempted.
     *
     * @var int
     */
    public $tries = 3;

    /**
     * The number of seconds the job can run before timing out.
     *
     * @var int
     */
    public $timeout = 60 * 10;

    /**
     * Indicate if the job should be marked as failed on timeout.
     *
     * @var bool
     */
    public $failOnTimeout = true;

    /**
     * The number of seconds to wait before retrying the job.
     *
     * @var int
     */
    public $backoff = 3;

    /**
     * @throws \Support\Containers\Exceptions\DockerComposePathNotDirectoryException
     * @throws \Support\Containers\Exceptions\DockerComposeMissingException
     * @throws \Support\Certificates\Exceptions\MkcertMissingException
     * @throws \Support\Containers\Exceptions\DockerSwarmServiceMissingException
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
            WordPressService::install($site->host),
            WordPressService::deploySwarm($site->host),
            fn () => sleep(20),
            WordPressService::execSwarm($site->host, "wp core install --url=$url --title=\"$title\" --admin_user='admin' --admin_email=$email --admin_password=\"$password\""),
            WordPressService::execSwarm($site->host, "wp core update"),
            WordPressService::execSwarm($site->host, "wp theme install $theme --activate"),
            WordPressService::execSwarm($site->host, "wp plugin install $plugins --activate"),
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
