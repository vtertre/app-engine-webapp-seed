import proxyquire from 'proxyquire';
import sinon from 'sinon';
import decorateAsListener from '../../../../test/listener_decorator';

import AppEvents from '../events';

describe('The disable on request directive', () => {
  let angularModule, scope, element, attributes, formController, directive;
  let formElement;

  beforeEach(() => {
    proxyquire.noCallThru();
    angularModule = {__esModule: true, element: sinon.stub()};
  });

  beforeEach(() => {
    scope = decorateAsListener({});
    element = {attr: sinon.spy(), removeAttr: sinon.spy(), html: sinon.stub().returns('initial')};
    attributes = {elementValidation: 'elm', loadingText: 'loading'};
    formController = {$name: 'form', $valid: false};
  });

  beforeEach(() => {
    formElement = decorateAsListener({});
    angularModule.element.withArgs("form[name='form']").returns(formElement);
  });

  beforeEach(() => {
    let DisableOnRequestDirective = proxyquire('./disable_on_request_directive', {'angular': angularModule});
    directive = new DisableOnRequestDirective(AppEvents);
    directive.link(scope, element, attributes, formController);
  });

  it('should be defined', () => {
    directive.should.be.defined;
  });

  it('should disable the element and apply loading text on submit if the form is valid', () => {
    formController.$valid = true;

    formElement.emit('submit');

    element.attr.should.have.been.calledWith('disabled', 'disabled');
    element.html.should.have.been.calledWith('loading');
  });

  it('should leave the element as is on submit if the form is not valid', () => {
    formController.$valid = false;

    formElement.emit('submit');

    element.attr.should.not.have.been.called;
    element.html.should.not.have.been.calledWith('loading');
  });

  it('should enable the element and apply initial text once the associated request is ended', () => {
    formController.$valid = true;
    formElement.emit('submit');

    scope.emit(AppEvents.HTTP.REQUEST_ENDED);

    element.removeAttr.should.have.been.calledWith('disabled');
    element.html.should.have.been.calledWith('initial');
  });

  it('should not enable the element if the form has not been validated', () => {
    scope.emit(AppEvents.HTTP.REQUEST_ENDED);

    element.removeAttr.should.not.have.been.called;
    element.html.should.not.have.been.calledWith('loading');
  });
});
