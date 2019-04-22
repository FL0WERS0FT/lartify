<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Handles Registration Request
     *
     * @param Request $request
     * @return JsonResponse
     * @throws ValidationException
     */
    public function register(Request $request): JsonResponse
    {
        $this->validate($request, [
            'name' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        /** @var User $user */
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $token = $user->createToken('frontend')->accessToken;

        return response()->json(['token' => $token]);
    }

    /**
     * Handles Login Request
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request): ?JsonResponse
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (auth()->attempt($credentials)) {
            $token = auth()->user()->createToken('frontend')->accessToken;
            return response()->json(['token' => $token]);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    /**
     * Returns Authenticated User Details
     *
     * @return JsonResponse
     */
    public function details(): JsonResponse
    {
        return response()->json(['user' => auth()->user()]);
    }
}
