<?php

if (! function_exists('domain_path')) {
    /**
     * Get the path to the application folder.
     *
     * @param  string  $path
     * @return string
     */
    function domain_path($path = '')
    {
        return app()->basePath("cloud/Domain/{$path}");
    }
}

if (! function_exists('support_path')) {
    /**
     * Get the path to the application folder.
     *
     * @param  string  $path
     * @return string
     */
    function support_path($path = '')
    {
        return app()->basePath("cloud/Support/{$path}");
    }
}
