<?php

namespace Support\Containers\Shell;

use Support\Containers\Exceptions\DockerComposeFailedException;

class DockerCompose extends DockerShell
{
    public static function isInstalled(): bool
    {
        return static::$shell->execQuietly('docker-compose --version 2>&1')->isSuccessful();
    }

    /**
     * @throws DockerComposeFailedException
     */
    public function up(): static
    {
        return static::$shell->exec('cd '.static::$path.' && docker-compose up -d')->isSuccessful()
            ? $this
            : throw new DockerComposeFailedException('up', static::$path);
    }

    /**
     * @throws DockerComposeFailedException
     */
    public function stop(): static
    {
        return static::$shell->exec('cd '.static::$path.' && docker-compose up -d')->isSuccessful()
            ? $this
            : throw new DockerComposeFailedException('stop', static::$path);
    }

    /**
     * @throws DockerComposeFailedException
     */
    public function restart(): static
    {
        return static::$shell->exec('cd '.static::$path.' && docker-compose restart')->isSuccessful()
            ? $this
            : throw new DockerComposeFailedException('restart', static::$path);
    }

    public function command(string $command): bool
    {
        return static::$shell->exec('cd '.static::$path.' && docker-compose exec -T '.$command)->isSuccessful();
    }
}
