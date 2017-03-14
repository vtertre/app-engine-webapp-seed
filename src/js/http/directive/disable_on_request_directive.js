let angular = require('angular');

/* @ngInject */
function DisableOnRequestDirective(AppEvents) {
  return {
    restrict: 'A',
    require: '^form',
    link: link
  };

  function link(scope, element, attributes, formController) {
    let initialButtonText = element.html();
    let loadingButtonText = attributes.loadingText;
    let formElement = angular.element(`form[name='${formController.$name}']`);
    let validated = false;

    formElement.on('submit', () => {
      if (formController.$valid) {
        validated = true;
        element.attr('disabled', 'disabled');
        element.html(loadingButtonText);
      }
    });

    scope.$on(AppEvents.HTTP.REQUEST_ENDED, () => {
      if (validated) {
        validated = false;
        element.html(initialButtonText);
        element.removeAttr('disabled');
      }
    });
  }
}

module.exports = DisableOnRequestDirective;
