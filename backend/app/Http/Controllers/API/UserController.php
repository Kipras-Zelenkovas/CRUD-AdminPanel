<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return response()->json(User::all(), 200);
        } catch (\Exception $e) {
            return response()->json('Can\'t get users', 500);
        }
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            User::create([
                'name'      => $request->get('name'),
                'surname'   => $request->get('surname'),
                'email'     => $request->get('email'),
                'password'  => Hash::make($request->get('password'))
            ]);

            return response()->json('All ok', 201);
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json('Not ok', 422);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            return response()->json(User::find($id)->get(), 200);
        } catch (\Exception $e) {
            return response()->json('Not ok', 503);
        }
    }

    /**
     * Display specific amout of users
     * 
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function GetUsers($id)
    {
        try {
            return response()->json(User::where('id', '>=', $id)->limit(10)->get(), 200);
        } catch (\Exception $e) {
            return response()->json('Can\'t get users', 500);
        }
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
        try {

            $user = User::find($id);

            $request->get('name')       ? $user->name = $request->get('name') : false;
            $request->get('email')      ? $user->email = $request->get('email') : false;
            $request->get('password')   ? $user->password = Hash::make($request->get('password')) : false;

            $user->save();

            return response()->json('All ok', 201);
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json('Not ok', 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            User::find($id)->delete();

            return response()->json('All ok', 200);
        } catch (\Exception $e) {
            return response()->json('Something went wrong', 503);
        }
    }
}
