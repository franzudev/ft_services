FROM alpine

RUN		apk update && apk upgrade --no-cache
RUN		apk add influxdb openssl
RUN		rm -rf /var/cache/apk/* /tmp/*

ENV		INFLUXDB_CONFIG_PATH="/etc/influxdb.conf"

RUN 	openssl req -x509 -nodes -days 365 -subj "/C=IT/ST=IT/O=Franzu, Inc./CN=localhost" -addext "subjectAltName=DNS:localhost" -newkey rsa:2048 -keyout /etc/ssl/influxdb.key -out /etc/ssl/influxdb.pem
COPY	conf.ini /etc/influxdb.conf

COPY	start.sh /bin/start
RUN		chmod +x /bin/start

CMD		start