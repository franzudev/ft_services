#!/bin/sh

# Config for Load Balancer
# see what changes would be made, returns nonzero returncode if different
kubectl get configmap kube-proxy -n kube-system -o yaml | \
sed -e "s/strictARP: false/strictARP: true/" | \
kubectl diff -f - -n kube-system

# actually apply the changes, returns nonzero returncode on errors only
kubectl get configmap kube-proxy -n kube-system -o yaml | \
sed -e "s/strictARP: false/strictARP: true/" | \
kubectl apply -f - -n kube-system

# Install Load Balancer
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/namespace.yaml
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/metallb.yaml
# On first install only
kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"

docker build -t my_nginx -f ./srcs/nginx/Dockerfile ./srcs/nginx
docker build -t my_wp -f ./srcs/wordpress/Dockerfile ./srcs/wordpress
docker build -t my_phpadmin -f ./srcs/phpmyadmin/Dockerfile ./srcs/phpmyadmin
docker build -t my_sql -f ./srcs/mysql/Dockerfile ./srcs/mysql
docker build -t my_influxdb -f ./srcs/influxdb/Dockerfile ./srcs/influxdb
docker build -t my_grafana -f ./srcs/grafana/Dockerfile ./srcs/grafana

kubectl apply -f srcs/config/metalLB/
kubectl apply -f srcs/config/mysql/
kubectl apply -f srcs/config/influxdb/
kubectl apply -f srcs/config/grafana/
kubectl apply -f srcs/config/wordpress/
kubectl apply -f srcs/config/phpmyadmin/
kubectl apply -f srcs/config/nginx/

# init dashboard
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
kubectl apply -f srcs/config/kube-user/

kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}" | pbcopy

kubectl proxy &
export APISERVER=$(kubectl config view --minify | grep server | cut -f 2- -d ":" | tr -d " ")
export SECRET_NAME=$(kubectl get secrets | grep ^default | cut -f1 -d ' ')
export TOKEN=$(kubectl describe secret $SECRET_NAME | grep -E '^token' | cut -f2 -d':' | tr -d " ")

# curl $APISERVER/api --header "Authorization: Bearer $TOKEN" --insecure
kubectl get services
echo "\nDashboard provided at: \n http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"

sleep 10s
open http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
