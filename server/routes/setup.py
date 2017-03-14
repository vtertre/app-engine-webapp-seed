# -*- coding: utf-8 -*-
__author__ = 'Vincent Tertre'

from flask import render_template, send_from_directory


def add_routes(app):
    app.add_url_rule('/', view_func=index)
    app.add_url_rule('/public/<path:path>', view_func=send_static_file)
    app.add_url_rule('/templates/<path:path>', view_func=serve_template)


def index():
    return render_template('index.jade')


def send_static_file(path):
    return send_from_directory('../server/public', path)


def serve_template(path):
    return render_template('templates/' + path + '.jade')
