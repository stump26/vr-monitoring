# bin/bash
PWD=../../
# build Api
cp deploy/docker/api.dockerfile Dockerfile 
docker build -t vr-monitor-api .
rm Dockerfile
# build web-client
cp deploy/docker/client.dockerfile Dockerfile 
docker build -t vr-monitor-client . 
rm Dockerfile 