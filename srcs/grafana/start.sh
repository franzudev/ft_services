# openrc default
# openrc boot

curl "http://influxdb:8086/query" --data-urlencode "q=CREATE USER telegraf
 WITH PASSWORD 'telegraf' WITH ALL PRIVILEGES"

curl "http://influxdb:8086/query" --data-urlencode "q=CREATE DATABASE telegraf"

telegraf_init

./telegraf/usr/bin/telegraf --config /telegraf/etc/telegraf/telegraf.conf &

cd grafana && ./bin/grafana-server