clear-localhost:
	kill -9 $(lsof -ti:80)

init:
	docker run --rm \
    -u "$(shell id -u):$(shell id -g)" \
    -v $(shell pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php80-composer:latest \
    composer install --ignore-platform-reqs

start:
	./vendor/bin/sail up -d

stop:
	./vendor/bin/sail down

clear:
	./vendor/bin/sail down -v