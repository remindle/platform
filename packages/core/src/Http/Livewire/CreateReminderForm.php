<?php

namespace Remindle\Core\Http\Livewire;

use Livewire\Component;
use Remindle\Core\Models\Reminder as ModelsReminder;

class CreateReminderForm extends Component
{
    public $name;

    protected $rules = [
        'name' => 'required|min:6',
    ];

    public function submit()
    {
        $this->validate();

        ModelsReminder::create([
            'name' => $this->name,
            'type' => 'default',
        ]);

        session()->flash('message', 'Reminder successfully created.');

        // return redirect()->to('/');
    }

    public function render()
    {
        return view('core::livewire.create-reminder-form');
    }
}
