<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    //
    public function register(Request $req){
        $validate=$req->validate([
        'email' => ['required'],
        'password' => ['required'],
        'name' => ['required'],
        ]);
        if($validate){
        $user=new User;
        $user->name=$req->name;
        $user->email=$req->email;
        $user->password=Hash::make($req->password);
        $user->save();
        // $token=$user->createToken('laravel_backend-token')->plainTextToken; token based
        return response()->json(['response'=>$user,'status_code'=>200]);
        }
        return response()->json(['response'=>"invalid input",'status_code'=>400]);
    }
    public function login(Request $request){


        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return response()->json(Auth::user(),200);
        }
        throw ValidationException::withMessages(['error' => 'Invalid credentials']);
        
                    
        
    }

        
    
    public function logout(Request $request){
    Auth::logout();

    $request->session()->invalidate();

    $request->session()->regenerateToken();
    return response()->json(['message'=>'User Logged out'],200);

    }
}
