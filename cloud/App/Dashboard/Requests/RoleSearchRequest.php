<?php

namespace App\Dashboard\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoleSearchRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'search' => ['sometimes'],
            'per_page' => ['sometimes', 'in:10,25,50,100'],
        ];
    }
}
