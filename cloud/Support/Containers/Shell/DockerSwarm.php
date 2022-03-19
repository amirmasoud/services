<?php

namespace Support\Containers\Shell;

use Support\Shell\Shell;
use Domain\Sites\Models\Site;
use Illuminate\Support\Collection;
use Symfony\Component\Console\Output\ConsoleOutput;
use Support\Containers\Exceptions\DockerSwarmServiceMissingException;

class DockerSwarm
{
    protected static Site $site;
    protected static Shell $shell;
    protected static DockerFormatter $formatter;
    protected static DockerNetworking $networking;
    protected static Environment $environment;

    public static function for(Site $site): static
    {
        static::$site = $site;
        static::$shell = new Shell(new ConsoleOutput());
        static::$formatter = new DockerFormatter();
        static::$networking = new DockerNetworking(static::$shell, self::$formatter);
        static::$environment = new Environment(static::$shell);

        return new static();
    }

    public function deploy(): bool
    {
        return static::$shell->exec(
            'cd '.storage_path('app/sites').'/'.static::$site->name
            // Print docker-compose output and fix quotation marks in the output and deploy the site
            .'&& docker-compose config | sed -E "s/cpus: ([0-9\\.]+)/cpus: \'\\1\'/" | docker stack deploy --compose-file - '.static::$site->name
        )->isSuccessful();
    }

    /**
     * @throws DockerSwarmServiceMissingException
     */
    public function updateReplicas(string $service, int $replicas = 1): bool
    {
        if (! $this->services()->contains(function ($runningService) use ($service) {
            return $runningService['name'] === static::$site->name.'_'.$service;
        })) {
            throw new DockerSwarmServiceMissingException($service);
        }

        return static::$shell->exec(
            'cd '.storage_path('app/sites').'/'.static::$site->name
            .'&& docker service update --replicas='.$replicas.' '.static::$site->name.'_'.$service
        )->isSuccessful();
    }

    public function services(): Collection
    {
        return $this->runAndParseTable(
            'cd '.storage_path('app/sites').'/'.static::$site->name
            .'&& docker stack services '.static::$site->name.' --format "table {{.ID}}|{{.Name}}|{{.Mode}}|{{.Replicas}}|{{.Image}}|{{.Ports}}"'
        );
    }

    protected function runAndParseTable(string $command): Collection
    {
        return static::$formatter->rawTableOutputToCollection(
            static::$shell->execQuietly($command)->getOutput()
        );
    }

    public function removeStack(): bool
    {
        return static::$shell->exec(
            'cd '.storage_path('app/sites').'/'.static::$site->name
            .'&& docker stack rm '.static::$site->name
        )->isSuccessful();
    }
}
