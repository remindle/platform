<x-guest-layout>
    <x-jet-authentication-card>
        <x-slot name="logo">
            <x-jet-authentication-card-logo />
        </x-slot>

        <div class="flex items-center justify-center m-4 text-center">
            <p>{{ __('Registration Closed') }}</p>
        </div>
    </x-jet-authentication-card>
</x-guest-layout>
