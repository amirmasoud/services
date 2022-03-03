<?php

namespace Support\WordPress;

use Illuminate\Support\Facades\Http;
use Support\WordPress\DataTransferObjects\PluginsData;

class ApiWordPress
{
    public static function plugins()
    {
        try {
            $response = Http::get('https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[page]=1&request[per_page]=400')->json();

            return response()->json(new PluginsData($response));
        } catch (\Exception $e) {
            return [
                'plugins' => [],
            ];
        }
    }
}
