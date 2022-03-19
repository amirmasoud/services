<?php

namespace Support\Certificates;

interface Certificate
{
    public function generate(string $name): void;
}
