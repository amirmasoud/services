<?php

namespace Support\Containers\Shell;

use Illuminate\Support\Collection;
use Support\Containers\Exceptions\DockerSwarmServiceMissingException;

class DockerSwarm extends DockerShell
{
    public function deploy(): bool
    {
        // Print docker-compose output and fix quotation marks in the output and deploy the site
        return static::$shell->exec(
            'cd '.static::$path
            .' && docker-compose config | sed -E "s/cpus: ([0-9\\.]+)/cpus: \'\\1\'/" | docker stack deploy --compose-file - '.static::$name
        )->isSuccessful();
    }

    /**
     * @throws DockerSwarmServiceMissingException
     */
    public function updateReplicas(string $service, int $replicas = 1): bool
    {
        if (! $this->services()->contains(function ($runningService) use ($service) {
            return $runningService['name'] === static::$name.'_'.$service;
        })) {
            throw new DockerSwarmServiceMissingException($service);
        }

        return static::$shell->exec(
            'cd '.static::$path
            .' && docker service update --replicas='.$replicas.' '.static::$name.'_'.$service
        )->isSuccessful();
    }

    public function services(): Collection
    {
        return $this->runAndParseTable(
            'cd '.static::$path
            .' && docker stack services '.static::$name.' --format "table {{.ID}}|{{.Name}}|{{.Mode}}|{{.Replicas}}|{{.Image}}|{{.Ports}}"'
        );
    }

    public function removeStack(): bool
    {
        return static::$shell->exec(
            'cd '.static::$path
            .' && docker stack rm '.static::$name
        )->isSuccessful();
    }
}
