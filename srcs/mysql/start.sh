#!/bin/sh

openrc default
openrc boot

/etc/init.d/mariadb setup

sed -i "s|.*bind-address\s*=.*|bind-address=0.0.0.0|g" /etc/my.cnf.d/mariadb-server.cnf
sed -i "s|.*skip-networking.*|skip-networking|g" /etc/my.cnf.d/mariadb-server.cnf

mv /etc/my.cnf.d/mariadb-server.cnf /etc/my.cnf.d/mariadb-server.orig.cnf
mv my.cnf /etc/my.cnf.d/mariadb-server.cnf

rc-service mariadb start
rc-service mariadb status

# automate mysql_secure_installation
mysql_secure

# mysqld_safe --datadir='/var/lib/mysql'
tail -f /dev/null