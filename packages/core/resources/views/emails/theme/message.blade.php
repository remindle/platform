@component('mail::layout')
  {{-- Header --}}
  @slot('header')
    @component('core::emails.theme.header', ['url' => config('app.url')])
      {{ config('app.name') }}
    @endcomponent
  @endslot

  {{-- Body --}}
    {{ $slot }}

  {{-- Subcopy --}}
  @isset($subcopy)
    @slot('subcopy')
      @component('mail::subcopy')
        {{ $subcopy }}
      @endcomponent
    @endslot
  @endisset

  {{-- Footer --}}
  @slot('footer')
    @component('mail::footer')
      © {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.')
      <br><br>
      @lang('The contents of this e-mail are confidential.')
    @endcomponent
  @endslot
@endcomponent
