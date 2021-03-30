#!/bin/sh

openrc default
openrc boot

rm /etc/my.cnf.d/mariadb-server.cnf
mv my.cnf /etc/my.cnf.d/mariadb-server.cnf

/etc/init.d/mariadb setup

rc-service mariadb start
rc-service mariadb status

echo "\ncreating database wordpress\n"
mysql < management.sql
mysql < wordpress.sql
mysql < phpmyadmin.sql
echo "\ndatabase wordpress created\n"
rm -f management.sql
rm -f wordpress.sql
rm -f phpmyadmin.sql

telegraf_init

./telegraf/usr/bin/telegraf --config /telegraf/etc/telegraf/telegraf.conf &

# automate mysql_secure_installation
mysql_secure

tail -f /dev/null