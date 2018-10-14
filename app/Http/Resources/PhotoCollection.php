<?php

namespace App\Http\Resources;

use App\Models\Photo;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Cache;

class PhotoCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $total = 0;
        if (!Cache::has(\Constant::CACHE_KEY_TOTAL_PHOTO)) {
            $total = Photo::count();
            Cache::forever(\Constant::CACHE_KEY_TOTAL_PHOTO, $total);
        }

        return [
            'data' => $this->collection,
            'meta' => [
                'total' => Cache::get(\Constant::CACHE_KEY_TOTAL_PHOTO, $total),
            ]
        ];
    }
}
