<?php

namespace App\Http\Resources;

use App\Models\Transport;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Cache;

class TransportCollection extends ResourceCollection
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
        if (!Cache::has(\Constant::CACHE_KEY_TOTAL_TRANSPORT)) {
            $total = Transport::count();
            Cache::forever(\Constant::CACHE_KEY_TOTAL_USER, $total);
        }

        return [
            'data' => $this->collection,
            'meta' => [
                'total' => Cache::get(\Constant::CACHE_KEY_TOTAL_TRANSPORT, $total),
            ]
        ];
    }
}
