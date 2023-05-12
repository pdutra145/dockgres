#!/bin/bash

# Prompt the user for confirmation before removing the alias
read -p "Are you sure you want to remove the 'dockgres' alias from .bashrc? (y/n) " answer
if [[ "$answer" != "y" && "$answer" != "Y" ]]; then
  echo "Alias 'dockgres' not removed from .bashrc."
  exit 0  
fi


# Remove the "dockgres" alias from .bashrc
sed -i "/alias dockgres=/d" ~/.bashrc

# Remove the "COMPOSE_DIR" environment variable from .bashrc
sed -i "/export COMPOSE_DIR=/d" ~/.bashrc

echo "Alias 'dockgres' and environment variable 'COMPOSE_DIR' removed from .bashrc."

source ~/.bashrc