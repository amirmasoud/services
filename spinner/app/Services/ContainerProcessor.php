<?php
namespace App\Services;

use App\Models\Site;
use Touhidurabir\StubGenerator\Facades\StubGenerator;

class ContainerProcessor
{
    public static Site $site;

    public static function for(Site $site): static
    {
        static::$site = $site;

        return new static();
    }

    public function init()
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
        shell_exec('cd ' . env('SITES_PATH') . '/' . static::$site->name . ' && docker-compose exec ' . static::$site->name . ' ' . $command);

        return $this;
    }

    protected function createDotEnvFile(): void
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

    protected function createDockerComposeFile(): void
    {
        StubGenerator::from(app_path('Stubs/wordpress.env.stub'), asFullPath: true)
            ->to(env('SITES_PATH') . '/' . static::$site->name, createIfNotExist: true, asFullPath: true)
            ->as('.env', hasExtension: false)
            ->withReplacers([
                'name' => static::$site->name,
                'site_url' => 'https://' . static::$site->host,
                'host' => static::$site->host,
            ])
            ->save();
    }

    protected function startTraefikContainer(): void
    {
        shell_exec('cd ' . env('PROXY_PATH') . ' && docker-compose up -d');

        shell_exec('cd ' . env('PROXY_PATH') . ' && docker-compose up -d traefik');
    }

    protected function generateSelfSignedCertificate()
    {
        $site = static::$site->name;
        shell_exec('cd ' . env('PROXY_PATH') . " && mkcert -cert-file certificates/{$site}-cert.pem -key-file certificates/{$site}-key.pem \"{$site}.test\" \"*.{$site}.test\"");
    }
}
