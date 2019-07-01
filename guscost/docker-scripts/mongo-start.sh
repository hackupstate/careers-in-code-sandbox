#!/bin/bash
source ./vars.sh
docker run -d --rm --name $MONGO_NAME \
-p 27017:27017 \
-v $HOME/docker/volumes/mongo:/data/db \
mongo
