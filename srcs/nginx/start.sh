#!/bin/sh

telegraf_init

./telegraf/usr/bin/telegraf --config /telegraf/etc/telegraf/telegraf.conf &

nginx -g "daemon off;"