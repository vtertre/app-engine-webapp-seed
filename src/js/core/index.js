import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';

import BootstrapService from './service/bootstrap_service';
import MainController from './controller/main_controller';

let coreModule = angular.module('app.core', [
  angularUiRouter,
  angularMaterial
])
  .service('bootstrapService', BootstrapService)
  .controller('MainController', MainController);

export default coreModule.name;
