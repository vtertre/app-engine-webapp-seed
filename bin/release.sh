#!/usr/bin/env bash

set -e

if [ -z $1 ] ; then
	echo "No version specified"
	exit 1
fi

cmd="npm version $1 -m \"Prepare release %s\""

eval ${cmd}
