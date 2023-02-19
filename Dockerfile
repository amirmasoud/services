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
    apk add --no-cache supervisor nginx && \
    apk add --no-cache --virtual .build-deps $PHPIZE_DEPS linux-headers libstdc++ curl-dev openssl-dev pcre-dev pcre2-dev zlib-dev && \
    docker-php-ext-install sockets bcmath pcntl pdo_mysql && \
    docker-php-ext-enable pdo_mysql && \
    docker-php-source extract && \
    mkdir /usr/src/php/ext/openswoole && \
    curl -sfL https://github.com/openswoole/ext-openswoole/archive/refs/tags/v22.0.0.tar.gz -o swoole.tar.gz && \
    tar xfz swoole.tar.gz --strip-components=1 -C /usr/src/php/ext/openswoole && \
    docker-php-ext-configure openswoole \
        --enable-http2 \
        --enable-mysqlnd \
        --enable-openssl \
        --enable-sockets \
        --enable-hook-curl && \
    docker-php-ext-install -j$(nproc) --ini-name zzz-docker-php-ext-openswoole.ini openswoole && \
    rm -rf swoole.tar.gz /var/cache/apk/* /tmp/* /usr/share/man /usr/src/php.tar.xz* && \
    docker-php-source delete && \
    apk del .build-deps

COPY /build/web/nginx/default.conf /etc/nginx/http.d/default.conf

COPY /build/web/supervisord.conf /etc/supervisor/supervisord.conf

COPY --from=composer --chown=www-data:www-data /var/www /var/www

COPY --from=node --chown=www-data:www-data /var/www /var/www

WORKDIR /var/www

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]
