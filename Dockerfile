FROM node:20-alpine3.17 AS node

COPY . /var/www

RUN \
    cd var/www && \
    npm ci && \
    npm run build && \
    rm -rf node_modules

FROM composer:2.5 AS composer

COPY composer.json composer.lock /var/www/

RUN \
    cd /var/www && \
    composer install --no-interaction --no-progress --no-scripts --no-dev --ignore-platform-reqs

FROM arm64v8/php:8.2-cli-alpine3.17

RUN \
    apk update && \
    apk add --no-cache supervisor nginx && \
    apk add --no-cache --virtual .build-deps $PHPIZE_DEPS linux-headers libstdc++ curl-dev openssl-dev pcre-dev pcre2-dev zlib-dev && \
    pecl install redis openswoole && \
    docker-php-ext-install sockets bcmath pcntl pdo_mysql && \
    docker-php-ext-enable pdo_mysql redis openswoole && \
    apk del .build-deps .build-deps $PHPIZE_DEPS linux-headers libstdc++ curl-dev openssl-dev pcre-dev pcre2-dev zlib-dev && \
    rm -rf /tmp/pear

COPY /build/web/nginx/default.conf /etc/nginx/http.d/default.conf
COPY /build/web/nginx/nginx.conf /etc/nginx/nginx.conf

COPY /build/web/supervisord.conf /etc/supervisor/supervisord.conf

COPY --from=composer --chown=www-data:www-data /var/www /var/www

COPY --from=node --chown=www-data:www-data /var/www /var/www

WORKDIR /var/www

RUN cp .env.example .env && chmod -R guo+w storage && chmod -R guo+w bootstrap/cache

EXPOSE 8000

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]
