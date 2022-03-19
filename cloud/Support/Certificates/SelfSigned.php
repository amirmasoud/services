<?php

namespace Support\Certificates;

use Support\Shell\Shell;

class SelfSigned implements Certificate
{
    public function generate(string $name): void
    {
        app(Shell::class)->execQuietly(
            'cd '.storage_path('app/proxy')
            ." && mkcert -cert-file certificates/{$name}-cert.pem -key-file certificates/{$name}-key.pem \"{$name}.test\" \"*.{$name}.test\""
        );
    }

    public function isMkcertInstalled(): bool
    {
        return app(Shell::class)->execQuietly('mkcert --version 2>&1')->isSuccessful();
    }
}
