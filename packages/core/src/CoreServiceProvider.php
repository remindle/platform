<?php

namespace Remindle\Core;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\ServiceProvider;
use Remindle\Core\Jobs\SendDailyRemindleEmail;

class CoreServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        $this->registerPublishing();

        if (! config('core.enabled')) {
            return;
        }

        /*
         * Optional methods to load your package assets
         */
        // $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'core');
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'core');
        // $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        $this->loadRoutesFrom(__DIR__.'/../routes/core.php');

        $this->registerCommands();
    }

    /**
     * Register the package's publishable resources.
     *
     * @return void
     */
    private function registerPublishing()
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../config/core.php' => config_path('core.php'),
            ], ['core-config', 'remindle-configs']);

            $this->publishes([
                __DIR__.'/../resources/views' => resource_path('views/vendor/core'),
            ], ['remindle-views', 'remindle-assets']);
        }
    }

    /**
     * Register the package's command resources.
     *
     * @return void
     */
    private function registerCommands()
    {
        $this->commands([
            Console\Commands\SendDailyRemindle::class,
        ]);

        $this->app->afterResolving(Schedule::class, function (Schedule $schedule) {
            $schedule->job(SendDailyRemindleEmail::class)->dailyAt('9:00');
        });
    }

    /**
     * Register the application services.
     */
    public function register()
    {
        // Automatically apply the package configuration
        $this->mergeConfigFrom(__DIR__.'/../config/core.php', 'core');

        // Register the main class to use with the facade
        $this->app->singleton('core', function () {
            return new Core;
        });
    }
}
