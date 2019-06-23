#!/bin/bash
source ./vars.sh
docker run -d --rm --name $POSTGRES_NAME \
-e POSTGRES_PASSWORD=cic -p 5432:5432 \
-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data \
postgres
