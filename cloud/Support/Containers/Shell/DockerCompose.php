<?php

namespace Support\Containers\Shell;

use Support\Shell\Shell;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Console\Output\ConsoleOutput;
use Support\Containers\Exceptions\DockerComposeFailedException;
use Support\Containers\Exceptions\DockerComposeMissingException;
use Support\Containers\Exceptions\DockerComposePathNotDirectoryException;

class DockerCompose
{
    protected static string $host;
    protected static Shell $shell;
    protected static DockerFormatter $formatter;
    protected static DockerNetworking $networking;
    protected static Environment $environment;
    protected static string $path;

    /**
     * @throws DockerComposePathNotDirectoryException
     * @throws DockerComposeMissingException
     */
    public static function for(string $host, ?string $path = null): static
    {
        static::$host = $host;
        static::$shell = new Shell(new ConsoleOutput());
        static::$formatter = new DockerFormatter();
        static::$networking = new DockerNetworking(static::$shell, self::$formatter);
        static::$environment = new Environment(static::$shell);

        static::$path = static::getDockerComposePath($path);

        return new static();
    }

    /**
     * @throws DockerComposePathNotDirectoryException
     * @throws DockerComposeMissingException
     */
    protected static function getDockerComposePath(?string $path = null): string
    {
        if (! File::isDirectory($path)) {
            throw new DockerComposePathNotDirectoryException($path);
        }

        if (! File::exists($path.'/docker-compose.yml')) {
            throw new DockerComposeMissingException($path.'/docker-compose.yml');
        }

        return $path ?? Storage::disk('sites')->path(static::$host);
    }

    public static function isInstalled(): bool
    {
        return static::$shell->execQuietly('docker-compose --version 2>&1')->isSuccessful();
    }

    /**
     * @throws DockerComposeFailedException
     */
    public function up(): static
    {
        return static::$shell->exec('cd '.static::$path.'&& docker-compose up -d')->isSuccessful()
            ? $this
            : throw new DockerComposeFailedException('up', static::$path);
    }

    /**
     * @throws DockerComposeFailedException
     */
    public function stop(): static
    {
        return static::$shell->exec('cd '.static::$path.'&& docker-compose up -d')->isSuccessful()
            ? $this
            : throw new DockerComposeFailedException('stop', static::$path);
    }

    /**
     * @throws DockerComposeFailedException
     */
    public function restart(): static
    {
        return static::$shell->exec('cd '.static::$path.'&& docker-compose restart')->isSuccessful()
            ? $this
            : throw new DockerComposeFailedException('restart', static::$path);
    }

    public function exec(string $command): bool
    {
        return static::$shell->exec('cd '.static::$path.'&& docker-compose exec -T '.$command)->isSuccessful();
    }
}
