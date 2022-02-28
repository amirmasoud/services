<?php

namespace App\Dashboard\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @property mixed $site
 */
class SiteRequest extends FormRequest
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
            'name' => ['required', 'unique:sites,name,' . $this->site?->id],
            'host' => ['required', 'unique:sites,host,' . $this->site?->id],
        ];
    }
}
