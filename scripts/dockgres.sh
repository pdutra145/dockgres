#!/bin/bash

if ! grep -q "dockgres" ~/.bashrc; then
    dir=$(dirname "$(readlink -f ./scripts/dockgres.sh)")
    echo "alias dockgres='$dir/dockgres.sh'" >> ~/.bashrc
    source ~/.bashrc
fi

if [ "$1" = "create" ]; then
    if docker ps -a --format '{{.Names}}' | grep -qE '(postgresql|my-pgadmin)'; then
        echo "error: Containers already created"
        exit 1
    else
        docker-compose up -d
    fi
elif [ "$1" = "start" ]; then
    docker-compose start
elif [ "$1" = "end" ]; then
    docker-compose stop
elif [ "$1" = "delete" ]; then
    docker-compose down
else
    echo "error: unrecognized command '$1'"
    exit 1
fi

