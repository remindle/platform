# platform

<p align="center">
    <a href="https://remindle.io" target="_blank"><img src="https://raw.githubusercontent.com/remindle/assets/main/logo/SVG/Logo_bleed.svg" width="200"></a>
</p>
<p align="center">Personal reminders</p>

<p align="center">
<img src="https://github.com/github/docs/actions/workflows/main.yml/badge.svg">
</p>

## About Remindle

Remindle is a platform which helps you to remember all important events. You can set the means you’d like to receive the notifit the frequency according to importance levels.

## Docs

[docs.remindle.io](https://docs.remindle.io)

## Features

- [Robust alerting engine](https://docs.remindle.io/alerting)

## Local Development

This project uses
[Laravel Sail](https://laravel.com/docs/sail) to manage
its local development stack. For more detailed usage instructions take a look at
the [official documentation](https://laravel.com/docs/sail).

### Links

- **Your Application** http://localhost
- **Preview Emails via Mailhog** http://localhost:8025
- **MeiliSearch Administration Panel** http://localhost:7700
- **MinIO Administration Panel** http://localhost:9000
- **Laravel Telescope** http://localhost/telescope
- **Laravel Horizon** http://localhost/horizon

### Start the development server

```shell
./vendor/bin/sail up
```

You can also use the `-d` option, to start the server in
the background if you do not care about the logs or still want to use your
terminal for other things.

### Build frontend assets

```shell
./vendor/bin/sail npm watch
```

### Run Tests

```shell
./vendor/bin/sail test
```

## Security Vulnerabilities

If you discover a security vulnerability within Remindle, please send an e-mail to us via [hello@remindle.io](mailto:hello@remindle.io). All security vulnerabilities will be promptly addressed.

## License

Remindle is open-sourced software licensed under the [GPL-3.0 license](https://opensource.org/licenses/GPL-3.0).
