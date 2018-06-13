FROM alpine

RUN sed -i -e 's/v[[:digit:]]\.[[:digit:]]/edge/g' /etc/apk/repositories


RUN apk add --no-cache bash
RUN apk add --no-cache php7-fpm~7.2.6
RUN apk add --no-cache curl
RUN apk add --no-cache supervisor

RUN curl https://getcaddy.com | bash -s personal http.expires

RUN apk add --no-cache dcron



COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh


COPY Caddyfile /
COPY supervisor.ini /etc/supervisor.d/
COPY php-fpm.conf /etc/php7/
COPY www.conf /etc/php7/php-fpm.d/

RUN addgroup -g 1000 -S www-data \
    	&& adduser -u 1000 -D -S -G www-data www-data


RUN apk add --no-cache php7-iconv~7.2.6
RUN apk add --no-cache php7-json~7.2.6
RUN apk add --no-cache php7-session~7.2.6
RUN apk add --no-cache php7-mbstring~7.2.6
RUN apk add --no-cache php7-openssl~7.2.6
RUN apk add --no-cache php7-tokenizer~7.2.6
RUN apk add --no-cache php7-opcache~7.2.6
RUN apk add --no-cache php7-pdo_mysql~7.2.6


CMD ["entrypoint.sh", "supervisord", "-n"]