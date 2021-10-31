<?php

namespace Remindle\Core;

class Core
{
    /**
     * Determine if Jetstream is supporting API features.
     *
     * @return bool
     */
    public static function hasRemindFeatures(): bool
    {
        return Features::hasRemindFeatures();
    }

    /**
     * Remind someone by name
     *
     * @return string
     */
    public function remind(String $name): string
    {
        return 'Reminding ' . $name . '!';
    }
}
