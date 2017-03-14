import angular from 'angular';

import AppEvents from './events';
import RestService from './service/rest_service';
import AjaxInterceptorService from './service/ajax_interceptor_service';
import DisableOnRequestDirective from './directive/disable_on_request_directive';

let httpModule = angular.module('app.http', [])
  .constant('AppEvents', AppEvents)
  .factory('ajaxInterceptorService', AjaxInterceptorService)
  .service('restService', RestService)
  .directive('galDisableOnRequest', DisableOnRequestDirective);

/* @ngInject */
httpModule.config($httpProvider => $httpProvider.interceptors.push('ajaxInterceptorService'));

export default httpModule.name;
