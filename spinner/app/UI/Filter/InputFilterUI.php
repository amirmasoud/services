<?php

namespace App\UI\Filter;

class InputFilterUI
{
    public function __construct(public string $name, public string $label, public ?string $value = '')
    {
        return [
            'name'  => $this->name,
            'label' => $this->label,
            'value' => $this->value,
            'type'  => 'input',
        ];
    }
}
