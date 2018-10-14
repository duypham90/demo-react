<?php

namespace App\Http\Controllers;

use App\Http\Resources\WeddingdressCollection;
use App\Models\Paginatable;
use App\Models\WeddingDress;
use Illuminate\Http\Request;

class WeddingdressController extends Controller
{
    use Paginatable;

    /**
     * Display a listing of the resource.
     *
     * @return TransportCollection
     */
    public function index(Request $request)
    {
        $columns = $request->get('columns', ['*']);
        $columns = !empty($columns) ? $columns : ['*'];
        $offset = (int)$request->get('offset', \Constant::OFFSET);
        $limit = $this->getPerPage($request->get('limit', \Constant::MIN_LIMIT));
        $data = WeddingDress::skip($offset)->limit($limit)->get($columns);

        return new WeddingdressCollection($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
