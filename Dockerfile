FROM node:19.6.0-alpine3.17 AS node

COPY . /var/www

RUN \
    cd var/www && \
    npm ci && \
    npm run build && \
    rm -rf node_modules

FROM composer:2.5.3 AS composer

COPY composer.json composer.lock /var/www/

RUN \
    cd /var/www && \
    composer install --no-interaction --no-progress --no-scripts --no-dev --ignore-platform-reqs

FROM php:8.2-cli-alpine3.17

RUN \
    apk update && \
    apk add --no-cache linux-headers && \
    docker-php-ext-install bcmath pcntl pdo_mysql sockets && \
    docker-php-ext-enable pdo_mysql && \
    rm -rf /var/cache/apk/* /tmp/* /usr/share/man /usr/src/php.tar.xz* && \
    docker-php-source delete

COPY /build/web/nginx/default.conf /etc/nginx/http.d/default.conf

COPY /build/web/supervisord.conf /etc/supervisor/supervisord.conf

COPY --from=composer --chown=www-data:www-data /var/www /var/www

COPY --from=node --chown=www-data:www-data /var/www /var/www

WORKDIR /var/www

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]
