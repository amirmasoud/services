<?php

namespace Support\Containers\Services;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Support\Containers\Shell\DockerSwarm;
use Support\Containers\Shell\DockerNetworking;
use Support\Containers\Exceptions\TraefikServiceAvailableException;

class TraefikService
{
    const NAME = 'traefik';

    /**
     * @throws TraefikServiceAvailableException
     */
    public static function install($force = false)
    {
        if (! $force && File::exists(Storage::disk('proxy')->path('docker-compose.yml'))) {
            throw new TraefikServiceAvailableException();
        }

        File::copy(
            support_path('Containers/Stubs/traefik/docker-compose.yml'),
            Storage::disk('proxy')->path('/docker-compose.yml')
        );

        File::copy(
            support_path('Containers/Stubs/traefik/traefik.yml'),
            Storage::disk('proxy')->path('/traefik.yml')
        );

        File::put(Storage::disk('proxy')->path('/dynamic_conf.yml'), '');

        File::ensureDirectoryExists(Storage::disk('proxy')->path('/certificates'));
    }

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
