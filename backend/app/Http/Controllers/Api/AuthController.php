<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\Auth\UserNotFound;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function authenticate(LoginRequest $login){
        $user = User::where("email", $login->username)->first();
        if(!$user || !Hash::check($login->password, $user->password)){
            throw new UserNotFound("Usuario o contraseña incorrecta.");
        }

        return [
            "user" => $user,
            "token" => $user->createToken($login->device_name)->plainTextToken
        ];
    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
    }
}
