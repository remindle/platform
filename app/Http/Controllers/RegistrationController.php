<?php

namespace App\Http\Controllers;

class RegistrationController extends Controller
{
    public function closed() {
        return view('auth.register-closed');
    }
}
