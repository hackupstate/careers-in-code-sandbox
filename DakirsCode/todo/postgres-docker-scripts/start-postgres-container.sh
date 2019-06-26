#!/bin/bash
source ./vars.sh
docker run -d --rm --name $NAME \
-e POSTGRES_PASSWORD=cic -p 5433:5433 \
-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data \
postgres