FROM	alpine

RUN		apk update && apk upgrade
RUN		apk add mariadb mariadb-client openrc

COPY	my.cnf .
COPY	start.sh /bin/start
RUN		chmod +x /bin/start
COPY	mysql_secure.sh /bin/mysql_secure
RUN		chmod +x /bin/mysql_secure

CMD		start