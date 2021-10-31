<?php

/*
 * You can place your custom package configuration in here.
 */

use Remindle\Core\Features;

return [
    /*
    |--------------------------------------------------------------------------
    | Core Master Switch
    |--------------------------------------------------------------------------
    |
    | This option may be used to disable all remindle core services
    |
    */

    'enabled' => env('CORE_ENABLED', true),

    /*
    |--------------------------------------------------------------------------
    | Route Middleware
    |--------------------------------------------------------------------------
    |
    | Here you may specify which middleware will be assigned to the routes
    | that it registers with the application. When necessary, you may modify
    | these middleware; however, this default value is usually sufficient.
    |
    */

    'middleware' => ['web'],

    /*
    |--------------------------------------------------------------------------
    | Features
    |--------------------------------------------------------------------------
    |
    | Some of Remindle's features are optional. You may disable the features
    | by removing or uncommenting them from this array.
    |
    */

    'features' => [
        Features::remind(),
    ],

];