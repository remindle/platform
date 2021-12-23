<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${description}" />
  <title>{{ config('app.name') }}</title>
  <link rel="icon" type="image/svg+xml" href="/logo.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" data-crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400|Sen:400,700|DM+Sans:300,500,700&amp;subset=latin"/>
@production
    @php
        $manifest = json_decode(file_get_contents(public_path('build/manifest.json')), true);
    @endphp
    <script type="module" src="/build/{$manifest['resources/js/{{ $name }}/main.js']['file']}"></script>
    <link rel="stylesheet" href="/build/{$manifest['resources/js/{{ $name }}/main.js']['css'][0]}">
@else
    <script type="module">
      import RefreshRuntime from "http://localhost:3000/@react-refresh"
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>
    <script type="module" src="http://localhost:3000/@vite/client"></script>
    <script type="module" src="http://localhost:3000/resources/js/{{ $name }}/main.tsx"></script>
@endproduction
</head>
<body class="antialiased">
  <div id="root"></div>
</body>
</html>
