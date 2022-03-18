<?php

namespace Support\Containers\Shell;

use GuzzleHttp\Client;
use Illuminate\Support\Collection;
use Psr\Http\Message\StreamInterface;

class DockerTags
{
    protected $guzzle;
    protected $service;

    public function __construct(Client $guzzle, BaseService $service)
    {
        $this->guzzle = $guzzle;
        $this->service = $service;
    }

    public function resolveTag($tag): string
    {
        if ($tag === 'latest') {
            return $this->getLatestTag();
        }

        return $tag;
    }

    public function getLatestTag(): string
    {
        $numericTags = $this->getTags()->reject(function ($tag) {
            return !is_numeric($tag[0]);
        });

        if ($numericTags->isEmpty()) {
            return 'latest';
        }

        return $numericTags->first();
    }

    public function getTags(): Collection
    {
        $response = json_decode($this->getTagsResponse()->getContents(), true);
        $platform = $this->platform();

        [$numericTags, $alphaTags] = collect($response['results'])
            ->when($platform === 'arm64', $this->armSupportedImagesOnlyFilter())
            ->when($platform !== 'arm64', $this->nonArmOnlySupportImagesFilter())
            ->pluck('name')
            ->partition(function ($tag) {
                return is_numeric($tag[0]);
            });

        $sortedTags = $alphaTags->sortDesc(SORT_NATURAL)
            ->concat($numericTags->sortDesc(SORT_NATURAL));

        if ($sortedTags->contains('latest')) {
            $sortedTags->splice($sortedTags->search('latest'), 1);
            $sortedTags->prepend('latest');
        }

        return $sortedTags->values()->filter();
    }

    protected function getTagsResponse(): StreamInterface
    {
        return $this->guzzle
            ->get($this->buildTagsUrl())
            ->getBody();
    }

    protected function buildTagsUrl(): string
    {
        return sprintf(
            $this->tagsUrlTemplate(),
            $this->service->organization(),
            $this->service->imageName()
        );
    }

    protected function tagsUrlTemplate(): string
    {
        return 'https://registry.hub.docker.com/v2/repositories/%s/%s/tags?page_size=1024';
    }

    protected function platform(): string
    {
        return php_uname('m');
    }

    /**
     * Return a function intended to filter tags, ensuring images that do not support arm architecture are filtered out.
     *
     * @return callable
     */
    protected function armSupportedImagesOnlyFilter()
    {
        return function ($tags) {
            return $tags->filter(function ($tag) {
                return collect($tag['images'])
                    ->pluck('architecture')
                    ->contains('arm64');
            });
        };
    }

    /**
     * Return a function intended to filter tags, that ensures are arm-only images are filtered out.
     *
     * @return callable
     */
    protected function nonArmOnlySupportImagesFilter()
    {
        return function ($tags) {
            return $tags->filter(function ($tag) {
                $supportedArchitectures = collect($tag['images'])
                    ->pluck('architecture')
                    ->unique()
                    ->values();

                // When removing the arm64 option from the list, there should
                // still be other options in the supported architectures
                // so we can consider that the tag is not arm-only.

                return $supportedArchitectures->diff(['arm64'])->count() > 0;
            });
        };
    }
}
