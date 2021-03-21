FROM	alpine

RUN		apk update && apk upgrade
RUN		apk add mariadb mariadb-client openrc

WORKDIR	/
COPY	start.sh /bin/start
RUN		chmod +x /bin/start

CMD		start