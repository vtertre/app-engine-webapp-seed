let decorateAsListener = require('../../../../test/listener_decorator');

import BootstrapService from './bootstrap_service';

describe('The bootstrap service', () => {
  let $document, $rootScope, service;

  beforeEach(() => {
    $rootScope = decorateAsListener({});
    $document = [{body: {scrollTop: 10}, documentElement: {scrollTop: 10}}];
  });

  beforeEach(() => {
    service = new BootstrapService($document, $rootScope);
    service.start();
  });

  it('should be defined', () => {
    service.should.be.defined;
  });

  it('should scroll to top on route change', () => {
    $rootScope.emit('$stateChangeSuccess');

    $document[0].body.scrollTop.should.equal(0);
    $document[0].documentElement.scrollTop.should.equal(0);
  });
});
