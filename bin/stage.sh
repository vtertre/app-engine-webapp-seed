#!/usr/bin/env bash

set -e

if [ -z $1 ] ; then
	echo "No version specified"
	exit 1
fi

echo "==== Configuring python dependencies for production ===="

rm -rf venv libs
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
linkenv venv/lib/python2.7/site-packages libs

echo "==== Building app for production ===="

perl -pi -e "s/'dev'/'staging'/g" app.yml

grunt build --prod

echo "==== Deploying app to App Engine ===="

gcloud app deploy \
    app.yml \
    dispatch.yaml \
    --account=TODO \
    --project=TODO \
    --version=$1 \
    --quiet

perl -pi -e "s/'staging'/'dev'/g" app.yml
grunt build
