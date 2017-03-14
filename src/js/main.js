import angular from 'angular';
import core from './core';
import http from './http';
import 'jquery';
import '../less/style.less';

angular.module('app', [core, http])
  .config(config)
  .run(run);

/* @ngInject */
function config($interpolateProvider) {
  $interpolateProvider.startSymbol('[[').endSymbol(']]');
}

/* @ngInject */
function run(bootstrapService) {
  bootstrapService.start();
}
