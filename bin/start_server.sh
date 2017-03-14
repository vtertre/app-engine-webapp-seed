#!/usr/bin/env bash

if [ -z $1 ] ; then
	echo "Specify api module folder path"
	exit 1
fi

dev_appserver.py app.yml "$1"/api.yaml dispatch.yaml --port=8085 --admin_port=8001