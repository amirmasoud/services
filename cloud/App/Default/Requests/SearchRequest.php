<?php

namespace App\Default\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SearchRequest extends FormRequest
{
    public array $perPage = [10, 25, 50, 100];

    public function authorize(): bool
    {
        return true;
    }

    public function rules()
    {
        return [
            'search' => ['sometimes'],
            'per_page' => ['sometimes', 'in:'.implode(', ', $this->perPage)],
        ];
    }
}
