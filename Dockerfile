FROM node:18.4-alpine3.15 AS node

WORKDIR /var/www

COPY . .

RUN npm ci

RUN npm run production

RUN rm -rf node_modules

#FROM php:8.1-fpm-alpine3.15 AS php
#
#COPY --from=node /var/www /var/www
#
#RUN rm -f /etc/apk/repositories &&\
#    echo "http://dl-cdn.alpinelinux.org/alpine/v3.11/main" >> /etc/apk/repositories && \
#    echo "http://dl-cdn.alpinelinux.org/alpine/v3.11/community" >> /etc/apk/repositories && \
#    apk update && apk add libpq && \
#    set -ex && \
#    apk add --no-cache --virtual .build-deps zlib-dev libjpeg-turbo-dev libpng-dev libxml2-dev bzip2-dev postgresql-libs postgresql-dev gcc musl-dev make autoconf && \
#    apk add --update --no-cache jpegoptim pngquant optipng supervisor nano icu-dev freetype-dev libzip-dev && \
#    docker-php-ext-configure opcache --enable-opcache && \
#    docker-php-ext-configure gd --with-freetype --with-jpeg && \
#    docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql && \
#    docker-php-ext-install opcache pdo pgsql pdo_pgsql sockets intl gd xml zip bz2 pcntl bcmath && \
#    apk del postgresql-dev && \
#    apk del -f .build-deps && \
#    echo '*  *  *  *  * /usr/local/bin/php  /var/www/artisan schedule:run >> /dev/null 2>&1' > /etc/crontabs/root && mkdir /etc/supervisor.d
#
#COPY build/supervisord.conf /etc/supervisord.conf
#
#WORKDIR /var/www
#
#RUN chown -R www-data:www-data /var/www
#
#RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
#
#RUN mkdir vendor && chown nobody:nobody vendor
#
#USER nobody:nobody
#
#RUN composer install --no-interaction --no-dev --optimize-autoloader --prefer-dist
#
#USER www-data:www-data
#
#EXPOSE 9000
#
##ENTRYPOINT ["supervisord", "--nodaemon", "--configuration", "/etc/supervisord.conf"]
