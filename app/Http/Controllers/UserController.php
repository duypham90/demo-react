<?php

namespace App\Http\Controllers;

use App\Models\Paginatable;
use App\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserCollection;
use App\Http\Resources\User as UserResouce;

class UserController extends Controller
{
    use Paginatable;

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\JsonResource
     */
    public function index(Request $request)
    {
        $offset = (int)$request->get('offset', \Constant::OFFSET);
        $limit = $this->getPerPage($request->get('limit', \Constant::MIN_LIMIT));
        $users = User::skip($offset)->limit($limit)->get();

        return new UserCollection($users);
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
     * @param $id
     * @return UserResouce|\Illuminate\Http\JsonResponse
     */
    public function edit($id)
    {
        $user = User::find($id);

        if (! $user) {
            return response()->json('The user is not exists', 404);
        }

        return new UserResouce($user);
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
        $user = User::find($id);

        if (!$user) {
            return response()->json('Error: user not found', 400);
        }

        $user->delete();

        return response()->json(['message' => 'delete success']);
    }
}
