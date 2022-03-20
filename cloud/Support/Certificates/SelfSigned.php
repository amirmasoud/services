<?php

namespace Support\Certificates;

use Support\Shell;
use Support\Certificates\Exceptions\MkcertMissingException;

class SelfSigned implements Certificate
{
    /**
     * @throws MkcertMissingException
     */
    public function generate(string $path, string $domain): void
    {
        if (! $this->isMkcertInstalled()) {
            throw new MkcertMissingException();
        }

        app(Shell::class)->execQuietly(
            'cd '.$path
            ." && mkcert -cert-file certificates/{$domain}-cert.pem -key-file certificates/{$domain}-key.pem \"{$domain}.test\" \"*.{$domain}.test\""
        );
    }

    protected function isMkcertInstalled(): bool
    {
        return app(Shell::class)->execQuietly('mkcert --version 2>&1')->isSuccessful();
    }
}
