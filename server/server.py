# -*- coding: utf-8 -*-
__author__ = 'Vincent Tertre'

import uuid

import os
from flask import Flask
from routes.setup import add_routes
from revision import Revision


class Server(object):
    def __init__(self):
        self.flask = Flask(__name__, template_folder='views')
        self.flask.config.from_object(ServerConfiguration)
        self.flask.jinja_env.add_extension('pyjade.ext.jinja.PyJadeExtension')
        add_routes(self.flask)
        Revision(os.path.join(os.getcwd(), 'server', 'public', 'app', 'map.json'), '/public/app').register(self.flask)

    def start(self, port):
        self.flask.run(port=port)

    def __call__(self, environ, start_response):
        return self.flask.wsgi_app(environ, start_response)


class ServerConfiguration(object):
    DEBUG = os.environ.get('env', 'dev') == 'dev'
    SECRET_KEY = uuid.uuid4()
