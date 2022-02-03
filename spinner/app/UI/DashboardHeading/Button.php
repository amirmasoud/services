<?php

namespace App\UI\DashboardHeading;

class Button
{
    public string $link = '#';

    public string $label = '';

    /**
     * @param  array $items
     * @return \Illuminate\Support\Collection
     */
    public static function collection(array $items): \Illuminate\Support\Collection
    {
        return collect($items);
    }
}
