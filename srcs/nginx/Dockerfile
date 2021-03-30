FROM	alpine

RUN		apk update && apk upgrade &&\
		apk add --no-cache nginx openssl libc6-compat &&\
		rm -rf /var/cache/apk/* /tmp/* &&\
		adduser -D -g 'www' www &&\
		mkdir /www

RUN 	openssl req -x509 -nodes -days 365 -subj "/C=IT/ST=IT/O=Franzu, Inc./CN=localhost" -addext "subjectAltName=DNS:localhost" -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.pem

COPY	nginx.conf /etc/nginx/conf.d/default.conf

COPY	index.html	/www/

RUN		wget -c https://dl.influxdata.com/telegraf/releases/telegraf-1.18.0_linux_amd64.tar.gz -O - | tar -xz -C . &&\
		mv telegraf-1.18.0 telegraf &&\
		./telegraf/usr/bin/telegraf config > telegraf/etc/telegraf/telegraf.conf

COPY	telegraf_init start /bin/

RUN		chmod +x /bin/telegraf_init /bin/start &&\
		chown -R www:www /var/lib/nginx &&\
		chown -R www:www /www &&\
		mkdir -p /run/nginx

CMD		start