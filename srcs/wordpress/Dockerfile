FROM	alpine

RUN		apk update && apk upgrade
RUN		apk add nginx

RUN 	openssl req -x509 -nodes -days 365 -subj "/C=IT/ST=IT/O=Franzu, Inc./CN=localhost" -addext "subjectAltName=DNS:localhost" -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.pem

RUN		adduser -D -g 'www' www
RUN		mkdir /www

WORKDIR	/www
RUN 	wget -c https://wordpress.org/latest.tar.gz -O - | tar -xz -C .

COPY	/srcs/wordpress/wp-config.php /www/wordpress
COPY	nginx.conf /etc/nginx/conf.d/default.conf
COPY	index.html	/www/
# RUN		ln -sfn /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
RUN		chown -R www:www /var/lib/nginx
RUN		chown -R www:www /www
RUN		mkdir -p /run/nginx

CMD ["nginx", "-g", "daemon off;"];