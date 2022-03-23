<?php

namespace Support\Containers\Services;

use Illuminate\Support\Facades\File;
use Support\Certificates\SelfSigned;
use Illuminate\Support\Facades\Storage;
use Support\Containers\Enums\ImageEnum;
use Support\Containers\Shell\DockerSwarm;
use Support\Containers\Shell\DockerNetworking;
use Touhidurabir\StubGenerator\Facades\StubGenerator;
use Support\Containers\Exceptions\TraefikServiceAvailableException;

class WordPressService
{
    /**
     * @throws \Support\Certificates\Exceptions\MkcertMissingException
     */
    public static function install(string $host, ImageEnum $image = ImageEnum::WORDPRESS_NGINX_MARIADB, bool $force = false)
    {
        $sites = Storage::disk(config('cloud.disks.sites'));

        // Create docker-compose.yml
        // StubGenerator::from($image->path('docker-compose.yml.stub'), asFullPath: true)
        //     ->to($sites->path($host), createIfNotExist: true, asFullPath: true)
        //     ->as('docker-compose')->ext('yml')
        //     ->withReplacers(['name' => $host])
        //     ->save();

        // Create .env
        // StubGenerator::from($image->path('env.stub'), asFullPath: true)
        //     ->to($sites->path($host), createIfNotExist: true, asFullPath: true)
        //     ->as('.env')->noExt()
        //     ->withReplacers([
        //         'name' => $host,
        //         'site_url' => 'https://'.$host,
        //         'host' => $host,
        //     ])
        //     ->save();

        // Copy config directory
        // File::copyDirectory($image->path('/config'), $sites->path("$host/config"));

        // Generate SSL certificate
        app(SelfSigned::class)->generate($host);
    }

    /**
     * @throws \Support\Containers\Exceptions\DockerComposePathNotDirectoryException
     * @throws \Support\Containers\Exceptions\DockerComposeMissingException
     */
    public static function deploySwarm(string $host): bool
    {
        app(DockerNetworking::class)->ensureNetworkCreated();

        return DockerSwarm::for($host, Storage::disk(config('cloud.disks.sites'))->path($host))->deploy();
    }
}
