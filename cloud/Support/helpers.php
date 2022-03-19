<?php

if (! function_exists('domain_path')) {
    function domain_path(string $path = ''): string
    {
        return app()->basePath("cloud/Domain/{$path}");
    }
}

if (! function_exists('support_path')) {
    function support_path(string $path = ''): string
    {
        return app()->basePath("cloud/Support/{$path}");
    }
}

if (! function_exists('underscore_slug')) {
    function underscore_slug(string $string): string
    {
        return Str::slug($string, '_');
    }
}

if (! function_exists('title_case')) {
    function title_case(string $string): string
    {
        return Str::title($string);
    }
}

if (! function_exists('title_from_slug')) {
    function title_from_slug(string $string): string
    {
        return Str::of($string)->replace('_', ' ')->title();
    }
}
