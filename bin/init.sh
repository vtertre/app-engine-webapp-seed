#!/usr/bin/env bash

set -e

echo "==== Initializing development environment ===="

echo "... Installing pip dependencies ..."

rm -rf venv libs
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
linkenv venv/lib/python2.7/site-packages libs

echo "... Installing node modules ..."

rm -rf node_modules
npm install

echo "==== Done ===="

pip list --outdated
npm outdated
