<?php

namespace Support\Containers\Shell;

use Illuminate\Support\Str;
use Illuminate\Support\Collection;

class MongoDockerTags extends DockerTags
{
    public function getTags(): Collection
    {
        $response = json_decode($this->getTagsResponse()->getContents(), true);
        return collect($response['results'])
            ->map
            ->name
            ->filter(function ($tag) {
                return !Str::contains($tag, 'windowsservercore');
            });
    }
}
