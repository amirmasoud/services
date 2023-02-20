#!/bin/sh
set -e

php artisan key:generate

php artisan migrate --step --no-interaction

php artisan cache:clear

php artisan optimize:clear

php artisan route:cache

php artisan config:cache

php artisan view:cache

/usr/bin/supervisord -c /etc/supervisor/supervisord.conf

/usr/bin/supervisorctl -c /etc/supervisor/supervisord.conf reread

/usr/bin/supervisorctl -c /etc/supervisor/supervisord.conf reload
