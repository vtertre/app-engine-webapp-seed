# App Engine Webapp Seed
A seed for an AngularJS frontend using Flask on App Engine.

## Setup

- Install gcloud;
- Install pip & virtualenv;
- Run `./bin/init.sh` to initiate an isolated python environment and install node modules;
- Run `source venv/bin/activate` to activate the isolated python environment.

## Grunt tasks

- default: runs linter, unit tests, builds the app (dev) and enables watch mode
- test: runs linter & unit tests
- build: builds the app (specify --prod to create a production build)

## App Engine

App Engine has no dependency management system and requires the dependencies to be included.
The seed uses linkenv to go around this limitation.
Run `linkenv venv/lib/python2.7/site-packages libs` after adding new dependencies to remain compliant.

## Install new python dependencies

- Make sure your isolated environment is activated;
- Run `pip install <dependencies>`;
- Run `linkenv venv/lib/python2.7/site-packages libs`;
- Add the dependencies in the proper requirements file.

## Scripts

- init: initializes environment (virtualenv + development dependencies)
- deploy: installs production dependencies builds and deploys to App Engine (prod environment)
- start_server: runs the application and the API in App Engine mode
- pre-release: part of the release process (this probably should not be called directly)
- release: creates a new release of the app (npm version + git tag + deployment)
- post-release: part of the release process (this probably should not be called directly)
- stage: installs production dependencies builds and deploys to App Engine (staging environment)
