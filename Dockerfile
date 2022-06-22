FROM node:18.4-alpine3.15 AS node

WORKDIR /var/www

COPY . .

RUN npm ci

RUN npm run production

RUN rm -rf node_modules

FROM php:8.1-fpm-alpine3.15 AS php

# Rest of requirements are already installed in the PHP image.
RUN docker-php-ext-install bcmath pcntl && \
    apk update && apk add --no-cache supervisor && \
    rm -rf /var/cache/apk/*

COPY build/supervisord.conf /etc/supervisord.conf

COPY --from=composer:2.3 /usr/bin/composer /usr/local/bin/composer

WORKDIR /var/www

COPY --from=node /var/www .

RUN chown -R www-data:www-data .

RUN composer install --no-interaction --no-progress --no-scripts --no-dev

EXPOSE 9000

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
