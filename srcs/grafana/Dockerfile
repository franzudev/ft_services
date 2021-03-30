FROM alpine

RUN		apk update && apk upgrade --no-cache
RUN		apk add openrc fontconfig libc6-compat openssl curl

RUN		wget -c https://dl.grafana.com/oss/release/grafana-7.5.1.linux-amd64.tar.gz -O - | tar -xz -C .

RUN		mv grafana-7.5.1 grafana

ENV		INFLUX_PASSWORD="telegraf"

# RUN 	openssl req -x509 -nodes -days 365 -subj "/C=IT/ST=IT/O=Franzu, Inc./CN=localhost" -addext "subjectAltName=DNS:localhost" -newkey rsa:2048 -keyout /etc/ssl/private/grafana-selfsigned.key -out /etc/ssl/certs/grafana-selfsigned.pem

RUN		wget -c https://dl.influxdata.com/telegraf/releases/telegraf-1.18.0_linux_amd64.tar.gz -O - | tar -xz -C .

RUN		mv telegraf-1.18.0 telegraf

RUN		./telegraf/usr/bin/telegraf config > telegraf/etc/telegraf/telegraf.conf

RUN		mkdir /etc/dashboards

COPY	dashboards/ /etc/dashboards/

COPY	telegraf_init /bin/
RUN		chmod +x /bin/telegraf_init
COPY	grafana.db /grafana/data/
COPY	influxdb.yaml /grafana/conf/provisioning/datasources/
COPY	provision-config.yaml /grafana/conf/provisioning/dashboards/
COPY	start.sh /bin/start
RUN		chmod +x /bin/start

CMD		start