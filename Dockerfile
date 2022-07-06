FROM node:18.4-alpine3.15 AS node

COPY .eslintrc.js postcss.config.js tailwind.config.js vite.config.js .prettier.json cypress.json jsconfig.json package.json package-lock.json ./var/www/

COPY resources/ /var/www/resources/

RUN    cd var/www && \
       npm ci \
    && npm run build \
    && rm -rf node_modules

FROM composer:2.3 AS composer

COPY --from=node /var/www /var/www

COPY composer.json composer.lock /var/www/

RUN    cd /var/www \
    && composer install --no-interaction --no-progress --no-scripts --no-dev --ignore-platform-reqs

#FROM openswoole/swoole:4.11-php8.1-alpine

FROM php:8.1-alpine3.16 AS php

# Rest of requirements are already installed in the PHP image.
RUN    apk update \
    && apk add --no-cache $PHPIZE_DEPS openssl-dev supervisor nginx \
    && pecl install openswoole-4.11.1 \
    && docker-php-ext-install bcmath pcntl swoole \
    && rm -rf /var/cache/apk/* /tmp/* /usr/share/man /usr/src/php.tar.xz*

COPY /build/web/conf.d/web.conf /etc/nginx/http.d/default.conf

COPY /build/supervisord.conf /etc/supervisor/supervisord.conf

WORKDIR /var/www

COPY --from=composer /var/www .

COPY --from=node /var/www .

COPY . ./

RUN    php artisan cache:clear && php artisan config:cache \
    && chown -R www-data:www-data .

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]
