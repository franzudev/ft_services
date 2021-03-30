telegraf_init

./telegraf/usr/bin/telegraf --config /telegraf/etc/telegraf/telegraf.conf &

influxd &

sleep 2s

influx -execute "CREATE USER telegraf WITH PASSWORD 'telegraf' WITH ALL PRIVILEGES"
influx -execute "CREATE DATABASE telegraf"

tail -f /dev/null