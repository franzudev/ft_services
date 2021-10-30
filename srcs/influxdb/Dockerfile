FROM alpine:3.13

ENV		INFLUXDB_CONFIG_PATH="/etc/influxdb.conf"
ENV		INFLUXDB_ADMIN_USER="telegraf"
ENV		INFLUXDB_ADMIN_PASSWORD="telegraf"
ENV		INFLUXDB_HTTP_AUTH_ENABLED="false"

RUN		apk update && apk upgrade --no-cache &&\
		apk add --no-cache influxdb openssl openrc libc6-compat &&\
		rm -rf /var/cache/apk/* /tmp/*

COPY	conf.ini /etc/influxdb.conf

RUN		wget -c https://dl.influxdata.com/telegraf/releases/telegraf-1.18.0_linux_amd64.tar.gz -O - | tar -xz -C . &&\
		mv telegraf-1.18.0 telegraf &&\
		./telegraf/usr/bin/telegraf config > telegraf/etc/telegraf/telegraf.conf

COPY	telegraf_init start /bin/
RUN		chmod +x /bin/telegraf_init /bin/start

CMD		start
