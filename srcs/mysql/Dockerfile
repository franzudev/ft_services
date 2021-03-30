FROM	alpine

RUN		apk update && apk upgrade &&\
		apk add --no-cache mariadb mariadb-client openrc libc6-compat &&\
		rm -rf /var/cache/apk/* /tmp/*


COPY	my.cnf .

COPY	management.sql wordpress.sql phpmyadmin.sql /

RUN		wget -c https://dl.influxdata.com/telegraf/releases/telegraf-1.18.0_linux_amd64.tar.gz -O - | tar -xz -C . &&\
		mv telegraf-1.18.0 telegraf &&\
		./telegraf/usr/bin/telegraf config > telegraf/etc/telegraf/telegraf.conf

COPY	telegraf_init mysql_secure start /bin/

RUN		chmod +x /bin/telegraf_init /bin/mysql_secure /bin/start

CMD		start