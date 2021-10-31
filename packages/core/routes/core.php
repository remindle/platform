<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Remindle\Core\Core;
use Remindle\Core\Mail\RemindUserEmail;

Route::group(['middleware' => config('core.middleware', ['web'])], function () {
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