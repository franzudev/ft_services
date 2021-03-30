#!/bin/sh

php7-conf
openrc default
openrc boot
# rc-service nginx start
# rc-service nginx status
rc-service php-fpm7 start
rc-service php-fpm7 status

telegraf_init

./telegraf/usr/bin/telegraf --config /telegraf/etc/telegraf/telegraf.conf &

nginx -g "daemon off;"