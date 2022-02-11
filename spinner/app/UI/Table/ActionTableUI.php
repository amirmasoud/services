<?php

namespace App\UI\Table;

class ActionTableUI
{
    public function __construct(public string $name, public string $label, public string $link)
    {
        return [
            'name'  => $this->name,
            'label' => $this->label,
            'link'  => $this->link
        ];
    }
}
