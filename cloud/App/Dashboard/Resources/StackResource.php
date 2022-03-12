<?php

namespace App\Dashboard\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StackResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'type' => $this->type,
            'properties' => $this->properties,
        ];
    }
}
