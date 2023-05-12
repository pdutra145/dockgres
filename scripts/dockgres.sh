#!/bin/bash


if ! grep -q "dockgres" ~/.bashrc; then
    source ~/.bashrc

    dir=$(dirname "$(readlink -f ./scripts/dockgres.sh)")
    echo "$dir"
    echo "alias dockgres='$dir/dockgres.sh'" >> ~/.bashrc

    # Add the COMPOSE_DIR environment variable to ~/.bashrc
    echo "export COMPOSE_DIR='$(pwd)'" >> ~/.bashrc

    source ~/.bashrc
    exit 0
fi

cd $COMPOSE_DIR

if [ "$1" = "create" ]; then
    if docker ps -a --format '{{.Names}}' | grep -qE '(postgresql|my-pgadmin)'; then
        echo "error: Containers already created"
        exit 1
    else
        docker-compose up -d 
    fi
elif [ "$1" = "set" ]; then
    if [ -z "$2" ]; then
        echo "Service not Provided"
        exit 1
    else
        node ./build/index.js set "$2"
    fi
elif [ "$1" = "start" ]; then
    docker-compose start
elif [ "$1" = "end" ]; then
    docker-compose stop
elif [ "$1" = "delete" ]; then
    docker-compose down
elif [ "$1" = "kill" ]; then
    bash ./scripts/kill.sh
else
    echo "error: unrecognized command '$1'"
    cd -
    exit 1
fi

