# -*- coding: utf-8 -*-
__author__ = 'Vincent Tertre'

import os
from json import load


class Revision(object):
    def __init__(self, map_file, static_assets):
        self.map_file = map_file
        self.static_assets = static_assets

    def register(self, app):
        app.jinja_env.globals.update(revision=self._create_revision(os.environ.get('env', 'dev') != 'dev'))

    def _create_revision(self, prod):
        load_revision = self._create_loader(prod)
        return lambda bundle, bundle_type: load_revision(bundle, bundle_type)

    def _create_loader(self, prod):
        if prod:
            return lambda bundle, bundle_type: self._get_map_file_object()[bundle][bundle_type]
        return lambda bundle, bundle_type: self.static_assets + '/' + bundle + '.' + bundle_type

    def _get_map_file_object(self):
        with open(self.map_file, 'r') as file_content:
            return load(file_content)
