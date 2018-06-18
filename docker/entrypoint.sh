#!/bin/sh


#php /wait-mysql-connection.php


#if [ "${CRON}" = "true"  ]; then
#    echo "Start cron";
#    cron
#fi


exec "$@"