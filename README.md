# Kubernetes Istio Demo

This repository contains the demo of Managing Microservices with Kubernetes & Istio.


## Prerequisites

1. Install Docker-for-desktop (mac or windows)
2. Enable Kubernetes in Docker-for-Desktop
3. Install `Istio` in the kubernetes cluster.

## Version v1 Deployments

1. Install mysql database in the cluster
   ```
   kubectl apply -f yamls/0.mysql
   ```

2. Install hero, villain, threats services using yamls
   ```
   kubectl apply -f yamls/v1
   ``` 

## Version v2 deployment

1. Install versioin v2 deployment
   ```
   kubectl apply -f yamls/v2
   ```


## Observability Commands

1. To open Kiali Service Graph.
   ```
   kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=kiali -o jsonpath='{.items[0].metadata.name}') 20001:20001
   ```
2. To open prometheus
    ```
    kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=prometheus -o jsonpath='{.items[0].metadata.name}') 9090:9090
    ```
    Query: `istio_requests_total{destination_service="heroes.default.svc.cluster.local"}` To get total requests to heroes service
    Query: `istio_requests_total{destination_service="heroes.default.svc.cluster.local", destination_version="v3"}` to get total requests to heroes - v3 service

3. To open Graffana
    ```
    kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=grafana -o jsonpath='{.items[0].metadata.name}') 3000:3000 
    ```

## External Service Mesh

