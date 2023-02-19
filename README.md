# Services

An opinionated Laravel template, it comes with a few extra:

* ?

# How to

It uses DDD (Domain Driven Design) principles to create a clean and simple architecture.

## Goals

1. Create a working, testable and maintainable application.
2. Do not reinvent the wheel.

## Keep it updated with upstream

## Helper functions

Place your helper functions in the `helpers` directory. A helper function should have the following structure:

```php
if (! function_exists('my_helper_function')) {
    function my_helper_function(string $arg1 = ''): string
    {
        return $arg1;
    }
}
```

> Always check for function existence before defining it.

> You _don't have to_ use a prefix for your helper functions.

<hr />

References:

1. [Laravel helper function](https://laravel.com/docs/helpers)
2. [Creating Your Own PHP Helpers in a Laravel Project by Paul Redmond](https://laravel-news.com/creating-helpers)

## Screenshots

Save screenshots of the application in the `screenshots` directory.

## Setup CI/CD

Set your DockerHub username and password (todo on how on GitHub and DockerHub)

## End user documentation


### Bash into container

```bash
docker run --rm -it \
	--entrypoint sh \
	--mount type=bind,source="$(pwd)"/.env,target=/var/www/.env \
	amirmasoud/services:latest
```
