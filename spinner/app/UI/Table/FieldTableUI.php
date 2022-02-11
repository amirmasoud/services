<?php

namespace App\UI\Table;

class FieldTableUI
{
    public function __construct(public string $name, public string $label)
    {
        return [
            'name'  => $this->name,
            'label' => $this->label,
        ];
    }
}
