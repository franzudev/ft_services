FROM alpine

RUN		apk update && apk upgrade --no-cache
RUN		apk add openrc fontconfig wget libc6-compat openssl

RUN		wget -c https://dl.grafana.com/oss/release/grafana-7.5.1.linux-amd64.tar.gz -O - | tar -xz -C .

RUN		mv grafana-7.5.1 grafana

RUN 	openssl req -x509 -nodes -days 365 -subj "/C=IT/ST=IT/O=Franzu, Inc./CN=localhost" -addext "subjectAltName=DNS:localhost" -newkey rsa:2048 -keyout /etc/ssl/private/grafana-selfsigned.key -out /etc/ssl/certs/grafana-selfsigned.pem

RUN		wget -c https://dl.influxdata.com/telegraf/releases/telegraf-1.16.2_linux_amd64.tar.gz -O - | tar -xz -C .

RUN		mv telegraf-1.16.2 telegraf

COPY	grafana.db /grafana/data/
COPY	influxdb.yaml /grafana/conf/provisioning/datasources/
COPY	start.sh /bin/start
RUN		chmod +x /bin/start

CMD		start