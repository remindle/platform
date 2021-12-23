<?php

namespace Remindle\Core\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    use HasFactory;

    protected  $fillable = [
        'name',
        'type',
    ];
}
