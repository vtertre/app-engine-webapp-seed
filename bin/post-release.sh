#!/usr/bin/env bash

set -e

printf "\n====== Pushing release updates ======\n"

git revert -n HEAD
git reset package.json
git checkout package.json
git commit -m "Prepare for next development iteration"
git push --tags origin master

printf "\n====== Deploying version ======\n"

git checkout HEAD~1
bash bin/deploy.sh $(git describe --tags $(git rev-list --tags --max-count=1))
git checkout -
