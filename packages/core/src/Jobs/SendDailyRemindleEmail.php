<?php

namespace Remindle\Core\Jobs;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Remindle\Core\Mail\DailyRemindle;

class SendDailyRemindleEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        User::all()->each(fn(User $user) => $this->sendUserEmail($user));
    }

    public function sendUserEmail(User $user)
    {
        $email = (new DailyRemindle($user))
            ->onQueue('email');

        Mail::to($user)->queue($email);
    }
}
