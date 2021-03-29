FROM alpine

RUN		apk update && apk upgrade --no-cache
RUN		apk add influxdb openssl openrc libc6-compat
RUN		rm -rf /var/cache/apk/* /tmp/*

ENV		INFLUXDB_CONFIG_PATH="/etc/influxdb.conf"
ENV		INFLUXDB_ADMIN_USER="telegraf"
ENV		INFLUXDB_ADMIN_PASSWORD="telegraf"
ENV		INFLUXDB_HTTP_AUTH_ENABLED="false"

COPY	conf.ini /etc/influxdb.conf

RUN		wget -c https://dl.influxdata.com/telegraf/releases/telegraf-1.18.0_linux_amd64.tar.gz -O - | tar -xz -C .

RUN		mv telegraf-1.18.0 telegraf

RUN		./telegraf/usr/bin/telegraf config > telegraf/etc/telegraf/telegraf.conf


COPY	telegraf_init /bin/
RUN		chmod +x /bin/telegraf_init
COPY	start.sh /bin/start
RUN		chmod +x /bin/start


CMD		start