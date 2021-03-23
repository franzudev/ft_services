FROM	alpine

RUN		apk update && apk upgrade
RUN		apk add nginx openssl openrc
RUN		apk add php7 php7-fpm php7-pdo_mysql php7-cli php7-json php7-mbstring php7-common php7-session php7-iconv php7-gd php7-curl php7-xml php7-mysqli php7-imap php7-cgi fcgi php7-pdo php7-soap php7-xmlrpc php7-posix php7-mcrypt php7-gettext php7-ldap php7-ctype php7-dom

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

RUN 	openssl req -x509 -nodes -days 365 -subj "/C=IT/ST=IT/O=Franzu, Inc./CN=localhost" -addext "subjectAltName=DNS:localhost" -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.pem

RUN		adduser -D -g 'www' www
RUN		mkdir /www

WORKDIR	/www
RUN 	wget -c https://files.phpmyadmin.net/phpMyAdmin/5.0.4/phpMyAdmin-5.0.4-english.tar.gz -O - | tar -xz -C .
RUN		mv phpMyAdmin-5.0.4-english phpmyadmin
COPY	config.inc.php phpmyadmin/
COPY	darkwolf-5.0.zip .
RUN		unzip -d phpmyadmin/themes/ darkwolf-5.0.zip
RUN		rm -rf darkwolf-5.0.zip

COPY	nginx.conf /etc/nginx/conf.d/default.conf

RUN		chown -R www:www /var/lib/nginx
RUN		chown -R www:www /www
RUN		mkdir -p /run/nginx

WORKDIR	/
COPY	start.sh /bin/start
COPY	php7-conf.sh /bin/php7-conf
RUN		chmod +x /bin/start
RUN		chmod +x /bin/php7-conf

CMD		start