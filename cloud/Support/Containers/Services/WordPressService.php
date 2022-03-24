<?php

namespace Support\Containers\Services;

use Illuminate\Support\Facades\File;
use Support\Certificates\SelfSigned;
use Illuminate\Support\Facades\Storage;
use Support\Containers\Enums\ImageEnum;
use Support\Containers\Shell\DockerSwarm;
use Support\Containers\Shell\DockerNetworking;
use Touhidurabir\StubGenerator\Facades\StubGenerator;
use Support\Containers\Exceptions\CommandExecutionFailed;
use Support\Containers\Exceptions\TraefikServiceAvailableException;

class WordPressService
{
    /**
     * @throws \Support\Certificates\Exceptions\MkcertMissingException
     */
    public static function install(string $host, ImageEnum $image = ImageEnum::WORDPRESS_NGINX_MARIADB, bool $force = false): bool
    {
        $sites = Storage::disk(config('cloud.disks.sites'));
        $dir = underscore_slug($host);

        // Create docker-compose.yml
        if (! File::exists($sites->path($dir . '/docker-compose.yml'))) {
            StubGenerator::from($image->path('docker-compose.yml.stub'), asFullPath: true)
                ->to($sites->path($dir), createIfNotExist: true, asFullPath: true)
                ->as('docker-compose')->ext('yml')
                ->save();
        }

        // Create .env
        if (! File::exists($sites->path($dir . '/.env'))){
            StubGenerator::from($image->path('env.stub'), asFullPath: true)
                ->to($sites->path($dir), createIfNotExist: true, asFullPath: true)
                ->as('.env')->noExt()
                ->withReplacers([
                    'name' => underscore_slug($host),
                    'site_url' => 'https://'.$host,
                    'host' => $host,
                ])
                ->save();
        }

        // Copy config directory
        if (! File::isDirectory($sites->path($dir . '/config'))){
            File::copyDirectory($image->path('/config'), $sites->path("$dir/config"));
        }

        // Generate SSL certificate
        app(SelfSigned::class)->generate($dir);

        return true;
    }

    /**
     * @throws \Support\Containers\Exceptions\DockerComposePathNotDirectoryException
     * @throws \Support\Containers\Exceptions\DockerComposeMissingException
     */
    public static function deploySwarm(string $host): bool
    {
        app(DockerNetworking::class)->ensureNetworkCreated();

        return DockerSwarm::for($host, Storage::disk(config('cloud.disks.sites'))->path(underscore_slug($host)))->deploy();
    }

    /**
     * @throws \Support\Containers\Exceptions\DockerComposePathNotDirectoryException
     * @throws \Support\Containers\Exceptions\DockerComposeMissingException
     * @throws \Support\Containers\Exceptions\DockerSwarmServiceMissingException
     * @throws CommandExecutionFailed
     */
    public static function execSwarm(string $host, string $command, string $service = 'wordpress-cli'): bool
    {
        if (! DockerSwarm::for($host)->command(underscore_slug($host)."_$service", $command)->isSuccessful()) {
            throw new CommandExecutionFailed($command);
        }

        return true;
    }
}
