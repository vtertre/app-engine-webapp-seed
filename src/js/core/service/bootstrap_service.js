export default class BootstrapService {
  /* @ngInject */
  constructor($document, $rootScope) {
    this._$document = $document;
    this._$rootScope = $rootScope;
  }

  start() {
    this._enableAutoScrollTop();
  }

  _enableAutoScrollTop() {
    this._$rootScope.$on('$stateChangeSuccess', () => {
      let document = this._$document[0];
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  }
}
