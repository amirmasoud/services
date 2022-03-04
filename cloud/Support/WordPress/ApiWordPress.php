<?php

namespace Support\WordPress;

use Illuminate\Support\Facades\Http;
use Support\WordPress\DataTransferObjects\PluginsData;

class ApiWordPress
{
    public static function plugins(?string $search = null): array
    {
        try {
            $response = Http::get('https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[page]=1&request[per_page]=20' . ($search ?? '&request[search]=' . $search))->json();
            $data = new PluginsData($response);

            return $data->all();
        } catch (\Exception $e) {
            return [
                'plugins' => [],
            ];
        }
    }
}
