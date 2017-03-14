#!/usr/bin/env bash

set -e

printf "\n====== Applying release updates ======\n"

perl -pi -e "s/'dev'/'prod'/g" app.yml

printf "Done.\n"