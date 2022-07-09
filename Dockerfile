FROM node:18.4-alpine3.15 AS node

COPY .eslintrc.js postcss.config.js tailwind.config.js vite.config.js .prettier.json cypress.json jsconfig.json package.json package-lock.json ./var/www/

COPY resources/ /var/www/resources/

RUN \
    cd var/www && \
    npm ci && \
    npm run build && \
    rm -rf node_modules

FROM composer:2.3 AS composer

COPY --from=node /var/www /var/www

COPY composer.json composer.lock /var/www/

RUN \
    cd /var/www && \
    composer install --no-interaction --no-progress --no-scripts --no-dev --ignore-platform-reqs

FROM php:8.1.8-cli-alpine3.16

RUN \
    apk update && \
    apk add --no-cache libstdc++ && \
    apk add --no-cache --virtual .build-deps $PHPIZE_DEPS curl-dev openssl-dev pcre-dev pcre2-dev zlib-dev && \
    docker-php-ext-install sockets && \
    docker-php-source extract && \
    mkdir /usr/src/php/ext/swoole && \
    curl -sfL https://github.com/swoole/swoole-src/archive/v4.8.9.tar.gz -o swoole.tar.gz && \
    tar xfz swoole.tar.gz --strip-components=1 -C /usr/src/php/ext/swoole && \
    docker-php-ext-configure swoole \
        --enable-http2   \
        --enable-mysqlnd \
        --enable-openssl \
        --enable-sockets --enable-swoole-curl --enable-swoole-json && \
    docker-php-ext-install -j$(nproc) swoole && \
    rm -f swoole.tar.gz $HOME/.composer/*-old.phar && \
    docker-php-source delete && \
    apk del .build-deps

RUN \
    apk update && \
    apk --no-cache add supervisor nginx && \
    docker-php-ext-install bcmath pcntl pdo_mysql && \
    docker-php-ext-enable pdo_mysql && \
    rm -rf /var/cache/apk/* /tmp/* /usr/share/man /usr/src/php.tar.xz*

COPY /build/web/conf.d/web.conf /etc/nginx/http.d/default.conf

COPY /build/supervisord.conf /etc/supervisor/supervisord.conf

WORKDIR /var/www

COPY --from=composer /var/www .

COPY --from=node /var/www .

COPY . ./

RUN \
    chown -R www-data:www-data . && \
    chmod +x ./build/entrypoint.sh && \
    php artisan cache:clear && \
    php artisan config:cache

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]
