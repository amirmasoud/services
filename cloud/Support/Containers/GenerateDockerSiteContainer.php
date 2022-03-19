<?php

namespace Support\Containers;

use Illuminate\Support\Facades\File;
use Support\Containers\Enums\CertificateEnum;
use Touhidurabir\StubGenerator\Facades\StubGenerator;
use Support\Containers\Contracts\GenerateSiteContainer;

class GenerateDockerSiteContainer implements GenerateSiteContainer
{
    public function compose(string $from, string $to, array $replacers = []): void
    {
        StubGenerator::from($from, asFullPath: true)
            ->to($to, createIfNotExist: true, asFullPath: true)
            ->as('docker-compose')->ext('yml')
            ->withReplacers($replacers)
            ->save();
    }

    public function env(string $from, string $to, array $replacers = []): void
    {
        StubGenerator::from($from, asFullPath: true)
            ->to($to, createIfNotExist: true, asFullPath: true)
            ->as('.env')->noExt()
            ->withReplacers($replacers)
            ->save();
    }

    public function config(string $from, string $to): void
    {
        File::copyDirectory($from, $to);
    }

    public function certificate(CertificateEnum $certificate, string $site): void
    {
        match ($certificate) {
            CertificateEnum::SELF_SIGNED => $this->generateSelfSignedCertificate($site),
        };
    }
}
