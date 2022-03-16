<?php

namespace App\Dashboard\Resources;

use Domain\Sites\Enums\StackTypesEnum;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property StackTypesEnum $type
 * @property string $type_name
 * @property string $type_value
 * @property string $type_icon
 * @property mixed $price
 * @property mixed $id
 * @property mixed $name
 * @property mixed $properties
 */
class StackResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'type_name' => $this->type->label(),
            'type_value' => $this->type->value,
            'type_icon' => $this->type->icon(),
            'properties' => $this->properties,
        ];
    }
}
