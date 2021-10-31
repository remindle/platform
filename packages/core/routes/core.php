<?php

use Illuminate\Support\Facades\Route;
use Remindle\Core\Core;

Route::group(['middleware' => config('core.middleware', ['web'])], function () {
    if (Core::hasRemindFeatures()) {
      Route::get('/remind/{name}', function($name) {
        $reminder = new Core();
        return $reminder->remind($name);
      });
    }
});