<?php

namespace Remindle\Core\Http\Controllers;

use App\Http\Controllers\Controller;

class ReminderController extends Controller
{
    public function created() {
        return view('core::reminders.created');
    }
}
