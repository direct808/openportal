FROM alpine

RUN sed -i -e 's/v[[:digit:]]\.[[:digit:]]/edge/g' /etc/apk/repositories


RUN apk add --no-cache bash curl supervisor dcron

RUN curl https://getcaddy.com | bash -s personal http.expires

RUN apk add --no-cache \
    php7-fpm~7.2.6 \
    php7-iconv~7.2.6 \
    php7-json~7.2.6 \
    php7-session~7.2.6 \
    php7-mbstring~7.2.6 \
    php7-openssl~7.2.6 \
    php7-tokenizer~7.2.6 \
    php7-opcache~7.2.6 \
    php7-pdo_mysql~7.2.6




RUN addgroup -g 1000 -S www-data && \
    adduser -u 1000 -D -S -G www-data www-data


#RUN chmod +x /usr/bin/entrypoint.sh

COPY entrypoint.sh /usr/bin/
COPY Caddyfile /
COPY supervisor.ini /etc/supervisor.d/
#COPY php-fpm.conf /etc/php7/
#COPY www.conf /etc/php7/php-fpm.d/
COPY z-php-fpm.conf /etc/php7/php-fpm.d/




CMD ["entrypoint.sh", "supervisord", "-n"]