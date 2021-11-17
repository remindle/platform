@component('mail::message')
# Daily Remindle

Good morning {{ $name }}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
