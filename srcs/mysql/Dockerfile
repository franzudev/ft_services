FROM	alpine

RUN		apk update && apk upgrade
RUN		apk add mariadb mariadb-client openrc libc6-compat

COPY	my.cnf .

COPY	management.sql wordpress.sql phpmyadmin.sql /

RUN		wget -c https://dl.influxdata.com/telegraf/releases/telegraf-1.18.0_linux_amd64.tar.gz -O - | tar -xz -C .

RUN		mv telegraf-1.18.0 telegraf

RUN		./telegraf/usr/bin/telegraf config > telegraf/etc/telegraf/telegraf.conf

COPY	telegraf_init /bin/

RUN		chmod +x /bin/telegraf_init

COPY	start.sh /bin/start
RUN		chmod +x /bin/start
COPY	mysql_secure.sh /bin/mysql_secure
RUN		chmod +x /bin/mysql_secure

CMD		start