FROM	alpine

RUN		apk update && apk upgrade

RUN		apk add vsftpd openssl libc6-compat

ENV		USER=ftpuser

RUN		mkdir /home/ftpuser

RUN		adduser -D ftpuser
RUN		echo "ftpuser:password" | chpasswd
RUN		chown root:root /home/ftpuser
RUN		mkdir /home/ftpuser/files
RUN		chown ftpuser:ftpuser /home/ftpuser/files

RUN 	openssl req -x509 -nodes -days 365 -subj "/C=IT/ST=IT/O=Franzu, Inc./CN=localhost" -addext "subjectAltName=DNS:localhost" -newkey rsa:2048 -keyout /etc/ssl/private/vsftpd.pem -out /etc/ssl/private/vsftpd.pem

RUN		echo "ftpuser" >> /etc/vsftpd/vsftpd.userlist

COPY	vsftpd.conf /etc/vsftpd/

RUN		wget -c https://dl.influxdata.com/telegraf/releases/telegraf-1.18.0_linux_amd64.tar.gz -O - | tar -xz -C .
RUN		mv telegraf-1.18.0 telegraf
RUN		./telegraf/usr/bin/telegraf config > telegraf/etc/telegraf/telegraf.conf
COPY	telegraf_init /bin/
RUN		chmod +x /bin/telegraf_init

CMD		vsftpd /etc/vsftpd/vsftpd.conf