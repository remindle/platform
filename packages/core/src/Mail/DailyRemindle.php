<?php

namespace Remindle\Core\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DailyRemindle extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The user.
     *
     * @var User|null
     */
    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->queue = 'email';
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->markdown('core::emails.remind.daily')
            ->with('name', $this->user->name);
    }
}
