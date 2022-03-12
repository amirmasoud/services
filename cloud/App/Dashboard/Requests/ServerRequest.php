<?php

namespace App\Dashboard\Requests;

use Domain\Sites\Enums\ServerStatusEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class ServerRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => ['required'],
            'price' => ['required'],
            'ip' => ['required'],
            'port' => ['required'],
            'ram' => ['required'],
            'ram_unit' => ['required'],
            'cpu' => ['required'],
            'disk' => ['required'],
            'disk_type' => ['required'],
            'disk_unit' => ['required'],
            'os' => ['required'],
            'os_version' => ['required'],
            'status' => ['required', new Enum(ServerStatusEnum::class)],
            'notes' => ['required'],
        ];
    }
}
