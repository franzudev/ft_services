openrc default
openrc boot

/etc/init.d/mariadb setup

rc-service mariadb start
rc-service mariadb status

sed -i "s|.*bind-address\s*=.*|bind-address=0.0.0.0|g" /etc/my.cnf.d/mariadb-server.cnf
sed -i "s|.*skip-networking.*|skip-networking|g" /etc/my.cnf.d/mariadb-server.cnf

mysqld_safe --datadir='/var/lib/mysql'