<?php

namespace App\Models;

trait Paginatable
{
    /**
     * @param $pageSize
     * @return integer
     */
    public function getPerPage($pageSize)
    {
        $min = min((int)$pageSize, \Constant::MAX_LIMIT);
        return $min > 0 ? $min : \Constant::MIN_LIMIT;
    }
}