FROM	alpine

ENV		PHP_FPM_USER="www"
ENV		PHP_FPM_GROUP="www"
ENV		PHP_FPM_LISTEN_MODE="0660"
ENV		PHP_MEMORY_LIMIT="512M"
ENV		PHP_MAX_UPLOAD="50M"
ENV		PHP_MAX_FILE_UPLOAD="200"
ENV		PHP_MAX_POST="100M"
ENV		PHP_DISPLAY_ERRORS="On"
ENV		PHP_DISPLAY_STARTUP_ERRORS="On"
ENV		PHP_ERROR_REPORTING="E_COMPILE_ERROR\|E_RECOVERABLE_ERROR\|E_ERROR\|E_CORE_ERROR"
ENV		PHP_CGI_FIX_PATHINFO=0

RUN		apk update && apk upgrade --no-cache &&\
		apk add --no-cache nginx openssl openrc libc6-compat &&\
		apk add --no-cache php7 php7-fpm php7-pdo_mysql php7-cli php7-json php7-mbstring php7-common php7-session php7-iconv php7-gd php7-curl php7-xml php7-mysqli php7-imap php7-cgi fcgi php7-pdo php7-soap php7-xmlrpc php7-posix php7-mcrypt php7-gettext php7-ldap php7-ctype php7-dom


RUN 	openssl req -x509 -nodes -days 365 -subj "/C=IT/ST=IT/O=Franzu, Inc./CN=localhost" -addext "subjectAltName=DNS:localhost" -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.pem

RUN		adduser -D -g 'www' www &&\
		mkdir /www

WORKDIR	/www

RUN 	wget -c https://files.phpmyadmin.net/phpMyAdmin/5.1.0/phpMyAdmin-5.1.0-all-languages.tar.gz -O - | tar -xz -C . &&\
		mv phpMyAdmin-5.1.0-all-languages phpmyadmin

COPY	config.inc.php phpmyadmin/

RUN		wget https://files.phpmyadmin.net/themes/darkwolf/5.1/darkwolf-5.1.zip &&\
		unzip -d phpmyadmin/themes/ darkwolf-5.1.zip &&\
		rm -rf darkwolf-5.1.zip

COPY	nginx.conf /etc/nginx/conf.d/default.conf

RUN		chown -R www:www /var/lib/nginx &&\
		chown -R www:www /www &&\
		mkdir -p /run/nginx

WORKDIR	/

RUN		wget -c https://dl.influxdata.com/telegraf/releases/telegraf-1.18.0_linux_amd64.tar.gz -O - | tar -xz -C . &&\
		mv telegraf-1.18.0 telegraf &&\
		./telegraf/usr/bin/telegraf config > telegraf/etc/telegraf/telegraf.conf

COPY	telegraf_init start php7-conf /bin/

RUN		chmod +x /bin/telegraf_init /bin/php7-conf /bin/start

CMD		start