<?php

if (! function_exists ('domain_path')) {
    /**
     * Get the path to the application folder.
     *
     * @param  string  $path
     * @return string
     */
    function domain_path(string $path = ''): string
    {
        return app ()->basePath ("cloud/Domain/{$path}");
    }
}

if (! function_exists ('support_path')) {
    /**
     * Get the path to the application folder.
     *
     * @param  string  $path
     * @return string
     */
    function support_path(string $path = ''): string
    {
        return app ()->basePath ("cloud/Support/{$path}");
    }
}


function underscore_slug(string $string): string
{
    return Str::slug ($string, '_');
}

function title_case(string $string): string
{
    return Str::title ($string);
}

function title_from_slug(string $string): string
{
    return Str::of ($string)->replace ('_', ' ')->title ();
}
