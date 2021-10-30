#!/bin/sh

# actually apply the changes, returns nonzero returncode on errors only
kubectl get configmap kube-proxy -n kube-system -o yaml | \
sed -e "s/strictARP: false/strictARP: true/" | \
kubectl apply -f - -n kube-system

# Install Load Balancer
kubectl apply -n metallb-system -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/namespace.yaml
kubectl apply -n metallb-system -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/metallb.yaml
# On first install only
kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"

docker build -t my_nginx -f ./srcs/nginx/Dockerfile ./srcs/nginx
docker build -t my_wp -f ./srcs/wordpress/Dockerfile ./srcs/wordpress
docker build -t my_phpadmin -f ./srcs/phpmyadmin/Dockerfile ./srcs/phpmyadmin
docker build -t my_sql -f ./srcs/mysql/Dockerfile ./srcs/mysql
docker build -t my_influxdb -f ./srcs/influxdb/Dockerfile ./srcs/influxdb
docker build -t my_grafana -f ./srcs/grafana/Dockerfile ./srcs/grafana
docker build -t my_ftps -f ./srcs/ftps/Dockerfile ./srcs/ftps

kubectl create namespace services
kubectl apply -n metallb-system -f srcs/config/metalLB/
kubectl apply -n services -f srcs/config/mysql/
kubectl apply -n services -f srcs/config/influxdb/
kubectl apply -n services -f srcs/config/grafana/
kubectl apply -n services -f srcs/config/wordpress/
kubectl apply -n services -f srcs/config/phpmyadmin/
kubectl apply -n services -f srcs/config/nginx/
kubectl apply -n services -f srcs/config/ftps/

# init dashboard
kubectl apply --namespace=kubernetes-dashboard -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
kubectl apply --namespace=kubernetes-dashboard -f srcs/config/kube-user/

sleep 2s
kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}" | pbcopy

kubectl proxy &

kubectl get services -n services
echo "\nDashboard provided at: \n http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"

sleep 10s
NAMESPACE=services
POD_NAME=$(kubectl get pods  -o=name -n "${NAMESPACE}" | grep grafana | cut -f2 -d\/)
kubectl exec -it -n "${NAMESPACE}" "${POD_NAME}" -- sh -c "cd grafana && ./bin/grafana-cli admin reset-admin-password admin"
open http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
