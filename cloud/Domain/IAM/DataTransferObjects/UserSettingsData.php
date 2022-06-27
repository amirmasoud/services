<?php

namespace Domain\IAM\DataTransferObjects;

use Domain\IAM\Enums\LocaleEnum;
use Domain\IAM\Enums\DateFormatEnum;
use Spatie\DataTransferObject\DataTransferObject;

class UserSettingsData extends DataTransferObject
{
    public ?LocaleEnum $language;

    public ?string $languageLabel;

    public ?DateFormatEnum $dateFormat;

    public ?string $dateFormatLabel;

    public function __construct(...$args)
    {
        $this->language = $this->language ?? LocaleEnum::tryFrom(app()->getLocale()) ?? LocaleEnum::EN_US;

        $this->languageLabel = $this->language->label();

        $this->dateFormat = $this->dateFormat ?? DateFormatEnum::YYYY_MM_DD;

        $this->dateFormatLabel = $this->dateFormat->label();

        parent::__construct(...$args);
    }
}
