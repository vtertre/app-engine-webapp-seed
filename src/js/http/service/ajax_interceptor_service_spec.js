import sinon from 'sinon';

import AppEvents from '../events';
import AjaxInterceptorService from './ajax_interceptor_service';

describe('The ajax interceptor', () => {
  let $rootScope, $q, interceptor;

  beforeEach(() => {
    $rootScope = {$broadcast: sinon.spy()};
    $q = {};
    interceptor = new AjaxInterceptorService($rootScope, $q, AppEvents);
  });

  it('should be defined', () => {
    interceptor.should.be.defined;
  });

  it('should emit the request started event when a request is intercepted', () => {
    interceptor.request({});

    $rootScope.$broadcast.should.have.been.calledWith(AppEvents.HTTP.REQUEST_STARTED);
  });

  it('should emit the request ended event when a response is intercepted', () => {
    interceptor.response({});

    $rootScope.$broadcast.should.have.been.calledWith(AppEvents.HTTP.REQUEST_ENDED);
  });

  it('should emit the request ended event when a request failed', () => {
    interceptor.response({});

    $rootScope.$broadcast.should.have.been.calledWith(AppEvents.HTTP.REQUEST_ENDED);
  });
});
