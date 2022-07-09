#!/bin/sh
set -e

php artisan migrate --force

/usr/bin/supervisord -c /etc/supervisor/supervisord.conf
