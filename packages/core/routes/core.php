<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Remindle\Core\Core;
use Remindle\Core\Mail\RemindUserEmail;

Route::group(['middleware' => config('core.middleware', ['web'])], function () {
   // route all routes not matching other apps to the home app
    Route::fallback(function () {
      return redirect('auth');
    });

    // route all routes starting with /auth to the auth app
    Route::group(['prefix' => 'auth'], function() {
      Route::get('{any?}', function() {
        return view('auth');
      });
    });

    if (Core::hasRemindFeatures()) {
      Route::get('/remind/{name}', function($name) {
        $reminder = new Core();

        return $reminder->remind($name);
      });
    }

    // Development only
    if (App::environment('local')) {
      Route::get('/remind/{name}/mail', function ($name) {
        return new RemindUserEmail($name);
      });
    }
});