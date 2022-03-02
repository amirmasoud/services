<?php
namespace Support\Containers;

use Domain\Sites\Models\Site;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Support\Containers\DataTransferObjects\RunningContainerData;
use Support\Containers\Enums\ContainerState;
use Touhidurabir\StubGenerator\Facades\StubGenerator;

class ProcessContainer
{
    public static Site $site;

    public static function for(Site $site): static
    {
        static::$site = $site;

        exec('cd ' . realpath(storage_path('app/sites/' . $site->name)));

        return new static();
    }

    public function init(): static
    {
        $this->startTraefikContainer();
        $this->createDockerComposeFile();
        $this->createDotEnvFile();
        $this->copyConfigFiles();
        $this->generateSelfSignedCertificate();

        return $this;
    }

    public function start(): static
    {
        shell_exec('cd ' . storage_path('app/sites') . '/' . static::$site->name . ' && docker-compose up -d');

        return $this;
    }

    public function stop(): static
    {
        shell_exec('cd ' . storage_path('app/sites') . '/' . static::$site->name . ' && docker-compose stop');

        return $this;
    }

    public function restart(): static
    {
        shell_exec('cd ' . storage_path('app/sites') . '/' . static::$site->name . ' && docker-compose restart');

        return $this;
    }

    public function remove(): static
    {
        shell_exec('cd ' . env('SITES_PATH') . '/' . static::$site->name . ' && docker-compose down');

        return $this;
    }

    public function update(): static
    {
        shell_exec('cd ' . env('SITES_PATH') . '/' . static::$site->name . ' && docker-compose pull');

        return $this;
    }

    public function logs(): static
    {
        shell_exec('cd ' . env('SITES_PATH') . '/' . static::$site->name . ' && docker-compose logs');

        return $this;
    }

    public function exec(string $command)
    {
        return shell_exec('cd ' . storage_path('app/sites') . '/' . static::$site->name . ' && docker-compose exec -T ' . $command);
    }

    protected function createDotEnvFile(): void
    {
        StubGenerator::from(domain_path('Sites/Stubs/wordpress-nginx-fpm/env.stub'), asFullPath: true)
                     ->to(storage_path('app/sites') . '/' . static::$site->name, createIfNotExist: true, asFullPath: true)
                     ->as('.env')->noExt()
                     ->withReplacers([
                         'name' => static::$site->name,
                         'site_url' => 'https://' . static::$site->host,
                         'host' => static::$site->host,
                     ])
                     ->save();
    }

    protected function createDockerComposeFile(): void
    {
        StubGenerator::from(domain_path('Sites/Stubs/wordpress-nginx-fpm/docker-compose.yml.stub'), asFullPath: true)
                     ->to(storage_path('app/sites') . '/' . static::$site->name, createIfNotExist: true, asFullPath: true)
                     ->as('docker-compose')->ext('yml')
                     ->withReplacers(['name' => static::$site->name])
                     ->save();
    }

    protected function startTraefikContainer(): void
    {
        // @todo check retval and throw exception if not 0
        // @todo refactor to Docker Engine SDK
        exec('docker network create proxy', $output, $retval);
        exec('cd ' . storage_path('app/proxy') . ' && docker-compose up -d', $output, $retval);
    }

    protected function generateSelfSignedCertificate()
    {
        $site = static::$site->name;
        shell_exec('cd ' . storage_path('app/proxy') . " && mkcert -cert-file certificates/{$site}-cert.pem -key-file certificates/{$site}-key.pem \"{$site}.test\" \"*.{$site}.test\"");
    }

    protected function copyConfigFiles(): void
    {
        // @todo
        File::copyDirectory(domain_path('Sites/Stubs/wordpress-nginx-fpm/config'), storage_path('app/sites/' . static::$site->name . '/config'));
    }

    public static function dockerIsRunning(): bool
    {
        try {
            Http::get('http://localhost:2375/info');

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    public static function containers(): array
    {
        try {
            return Http::get('http://localhost:2375/containers/json')->json();
        } catch (\Exception $e) {
            return [];
        }
    }

    public static function hasState(string $container, ContainerState $status): bool
    {
        try {
            $response = Http::get("http://localhost:2375/containers/json?filters={\"name\": [\"^$container$\"]}")->collect()->first();

            return ContainerState::tryFrom($response['State']) === $status;
        } catch (\Exception $e) {
            return false;
        }
    }

    public static function state(string $container): ?ContainerState
    {
        $response = Http::get("http://localhost:2375/containers/json?filters={\"name\": [\"^$container$\"]}")->collect()->first();

        return ContainerState::tryFrom($response['State']);
    }

    public static function details(string $container)
    {
        try {
            $response = Http::get('http://localhost:2375/containers/json?limit=1&filters={"name": ["' . $container . '"]}');

            return new RunningContainerData($response->json()[0]);
        } catch (\Exception $e) {
            return [];
        }
    }
}
