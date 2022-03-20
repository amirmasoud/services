<?php

namespace Support\Containers\Services;

use Illuminate\Support\Facades\Storage;
use Support\Containers\Shell\DockerSwarm;
use Support\Containers\Shell\DockerNetworking;

class TraefikService
{
    const NAME = 'traefik';

    /**
     * @throws \Support\Containers\Exceptions\DockerComposePathNotDirectoryException
     * @throws \Support\Containers\Exceptions\DockerComposeMissingException
     */
    public static function deploySwarm(): bool
    {
        app(DockerNetworking::class)->ensureNetworkCreated();

        return DockerSwarm::for(static::NAME, Storage::disk('proxy')->path('/'))->deploy();
    }
}
