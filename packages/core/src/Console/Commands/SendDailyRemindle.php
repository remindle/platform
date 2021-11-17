<?php

namespace Remindle\Core\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Remindle\Core\Mail\DailyRemindle;

class SendDailyRemindle extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mail:daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends a daily email to all users';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        User::all()->each(fn(User $user) => $this->sendUserEmail($user));

        return Command::SUCCESS;
    }

    public function sendUserEmail(User $user)
    {
        $email = (new DailyRemindle($user))
            ->onQueue('email');

        Mail::to($user)->queue($email);
    }
}
