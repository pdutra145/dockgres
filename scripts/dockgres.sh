#!/bin/bash

if ! grep -q "dockgres" ~/.bashrc; then
    dir=$(dirname "$(readlink -f ./scripts/dockgres.sh)")
    echo "alias dockgres='$dir'" >> ~/.bashrc
    source ~/.bashrc
fi

if [ "$1" = "build" ]
then 
    node ./build/index.js $1 $2
elif [ "$1" = "start" ]
then
    docker-compose up -d
elif [ "$1" = "end" ]
then
    docker-compose down
else
    echo error
    exit 1
fi