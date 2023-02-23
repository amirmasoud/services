<?php

namespace Domain\Users\DataTransferObjects;

use Domain\Users\Enums\DateFormatEnum;
use Domain\Users\Enums\LocaleEnum;
use Spatie\LaravelData\Data;

class UserSettingsData extends Data
{
    public function __construct(
        public ?LocaleEnum     $language,
        public ?string         $languageLabel,
        public ?DateFormatEnum $dateFormat,
        public ?string         $dateFormatLabel
    )
    {
    }

    // /**
    //  * @throws \Spatie\DataTransferObject\Exceptions\UnknownProperties
    //  */
    // public function __construct(...$args)
    // {
    //     $this->language = $this->language ?? LocaleEnum::tryFrom(app()->getLocale()) ?? LocaleEnum::EN_US;
    //
    //     $this->languageLabel = $this->language->label();
    //
    //     $this->dateFormat = $this->dateFormat ?? DateFormatEnum::YYYY_MM_DD;
    //
    //     $this->dateFormatLabel = $this->dateFormat->label();
    //
    //     parent::__construct(...$args);
    // }
}
