FROM	alpine:3.13

RUN		apk add --no-cache vsftpd openssl libc6-compat &&\
		rm -rf /var/cache/apk/* /tmp/* &&\
		adduser -h /home/./files -s /bin/false -D files

RUN 	openssl req -x509 -nodes -days 365 -subj "/C=IT/ST=IT/O=Franzu, Inc./CN=localhost" -addext "subjectAltName=DNS:localhost" -newkey rsa:2048 -keyout /etc/ssl/private/vsftpd.key -out /etc/ssl/certs/vsftpd.crt

RUN		echo "local_enable=YES" >> /etc/vsftpd/vsftpd.conf &&\
		echo "chroot_local_user=YES" >> /etc/vsftpd/vsftpd.conf &&\
		echo "allow_writeable_chroot=YES" >> /etc/vsftpd/vsftpd.conf &&\
		echo "write_enable=YES" >> /etc/vsftpd/vsftpd.conf &&\
		echo "local_umask=022" >> /etc/vsftpd/vsftpd.conf &&\
		echo "passwd_chroot_enable=yes" >> /etc/vsftpd/vsftpd.conf &&\
		echo 'seccomp_sandbox=NO' >> /etc/vsftpd/vsftpd.conf &&\
		echo 'pasv_enable=Yes' >> /etc/vsftpd/vsftpd.conf &&\
		echo 'pasv_max_port=10100' >> /etc/vsftpd/vsftpd.conf &&\
		echo 'pasv_min_port=10098' >> /etc/vsftpd/vsftpd.conf &&\
		echo 'ssl_enable=YES' >> /etc/vsftpd/vsftpd.conf &&\
		echo 'rsa_cert_file=/etc/ssl/certs/vsftpd.crt' >> /etc/vsftpd/vsftpd.conf &&\
		echo 'rsa_private_key_file=/etc/ssl/private/vsftpd.key' >> /etc/vsftpd/vsftpd.conf &&\
		sed -i "s/anonymous_enable=YES/anonymous_enable=NO/" /etc/vsftpd/vsftpd.conf

RUN		wget -c https://dl.influxdata.com/telegraf/releases/telegraf-1.18.0_linux_amd64.tar.gz -O - | tar -xz -C . &&\
		mv telegraf-1.18.0 telegraf &&\
		./telegraf/usr/bin/telegraf config > telegraf/etc/telegraf/telegraf.conf

COPY	telegraf_init start /bin/
RUN		chmod +x /bin/telegraf_init /bin/start

CMD		start
