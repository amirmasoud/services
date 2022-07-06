FROM node:18.4-alpine3.15 AS node

WORKDIR /var/www

COPY . .

RUN    npm ci  \
    && npm run build  \
    && rm -rf node_modules

FROM composer:2.3 AS composer

COPY --from=node /var/www /var/www

WORKDIR /var/www

RUN    chown -R www-data:www-data . \
    && composer install --no-interaction --no-progress --no-scripts --no-dev --ignore-platform-reqs

FROM openswoole/swoole:4.11-php8.1-alpine

# Rest of requirements are already installed in the PHP image.
RUN    docker-php-ext-install bcmath pcntl \
    && apk update && apk add --no-cache supervisor nginx  \
    && rm -rf /var/cache/apk/* /tmp/* /usr/share/man /usr/src/php.tar.xz*

COPY /build/web/conf.d/web.conf /etc/nginx/http.d/default.conf

COPY /build/supervisord.conf /etc/supervisor/supervisord.conf

WORKDIR /var/www

COPY --from=composer /var/www .

RUN    php artisan cache:clear

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]
