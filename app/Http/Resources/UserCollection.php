<?php

namespace App\Http\Resources;

use App\User;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Cache;

class UserCollection extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $total = 0;
        if (!Cache::has(\Constant::CACHE_KEY_TOTAL_USER)) {
            $total = User::count();
            Cache::forever(\Constant::CACHE_KEY_TOTAL_USER, $total);
        }

        return [
            'data' => $this->collection,
            'meta' => [
                'total' => Cache::get(\Constant::CACHE_KEY_TOTAL_USER, $total),
            ]
        ];
    }
}
