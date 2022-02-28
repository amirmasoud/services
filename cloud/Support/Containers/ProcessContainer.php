<?php
namespace Support\Containers;

use Domain\Sites\Models\Site;
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

        return new static();
    }

    public function init(): static
    {
        $this->startTraefikContainer();
        $this->createDockerComposeFile();
        $this->createDotEnvFile();
        $this->generateSelfSignedCertificate();

        return $this;
    }

    public function start(): static
    {
        shell_exec('cd ' . env('SITES_PATH') . '/' . static::$site->name . ' && docker-compose up -d');

        return $this;
    }

    public function stop(): static
    {
        shell_exec('cd ' . env('SITES_PATH') . '/' . static::$site->name . ' && docker-compose stop');

        return $this;
    }

    public function restart(): static
    {
        shell_exec('cd ' . env('SITES_PATH') . '/' . static::$site->name . ' && docker-compose restart');

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

    public function exec(string $command): static
    {

        dd(exec('cd ' . env('SITES_PATH') . '/' . static::$site->name . ' && docker-compose exec wordpress bash"' . $command . '"'));

        return $this;
    }

    protected function createDotEnvFile(): void
    {
        StubGenerator::from(app_path('Stubs/wordpress.env.stub'), asFullPath: true)
                     ->to(env('SITES_PATH') . '/' . static::$site->name, createIfNotExist: true, asFullPath: true)
                     ->as('.env')
                    ->noExt()
                     ->withReplacers([
                         'name' => static::$site->name,
                         'site_url' => 'https://' . static::$site->host,
                         'host' => static::$site->host,
                     ])
                     ->save();
    }

    protected function createDockerComposeFile(): void
    {
        StubGenerator::from(app_path('Stubs/wordpress.stub'), asFullPath: true)
                     ->to(env('SITES_PATH') . '/' . static::$site->name, createIfNotExist: true, asFullPath: true)
                     ->as('docker-compose')
                     ->ext('yml')
                     ->withReplacers([
                         'version' => '3.7',
                         'name' => static::$site->name,
                     ])
                     ->save();
    }

    protected function startTraefikContainer(): void
    {
        shell_exec('docker network create proxy');
        shell_exec('cd ' . env('PROXY_PATH') . ' && docker-compose up -d');
    }

    protected function generateSelfSignedCertificate()
    {
        $site = static::$site->name;
        shell_exec('cd ' . env('PROXY_PATH') . " && mkcert -cert-file certificates/{$site}-cert.pem -key-file certificates/{$site}-key.pem \"{$site}.test\" \"*.{$site}.test\"");
    }

    public function installWPCli(): void
    {
        // && chmod +x wp-cli.phar && sudo mv wp-cli.phar /usr/local/bin/wp
        $this->exec('curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar');
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

    public static function hasStatus(string $container, ContainerState $status): bool
    {
        try {
            $response = Http::get('http://localhost:2375/containers/json?filters={"name": ["' . $container . '"]}')->collect()->first();

            return ContainerState::tryFrom($response['State']) === $status;
        } catch (\Exception $e) {
            return false;
        }
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
