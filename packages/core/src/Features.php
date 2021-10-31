<?php

namespace Remindle\Core;

class Features
{
    /**
     * Determine if a feature is enabled.
     *
     * @param  string  $feature
     * @return bool
     */
    public static function enabled(string $feature): bool
    {
        return in_array($feature, config('core.features', []));
    }

    /**
     * Determine if the application is using any Remind features.
     *
     * @return bool
     */
    public static function hasRemindFeatures()
    {
        return static::enabled(static::remind());
    }

    /**
     * Enable the remind feature.
     *
     * @return string
     */
    public static function remind()
    {
        return 'remind';
    }
}