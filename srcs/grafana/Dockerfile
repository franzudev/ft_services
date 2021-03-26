FROM alpine

RUN		apk update && apk upgrade --no-cache
RUN		apk add grafana busybox-initscripts musl

RUN		wget https://dl.influxdata.com/telegraf/releases/telegraf-1.16.2_linux_amd64.tar.gz
RUN		tar xf telegraf-1.16.2_linux_amd64.tar.gz

COPY	start.sh /bin/start
RUN		chmod +x /bin/start

CMD start