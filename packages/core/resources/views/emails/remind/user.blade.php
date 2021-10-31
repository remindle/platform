@component('core::emails.theme.message')
# Reminder

Hello {{ $name }}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
