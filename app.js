let myApp = angular.module('myApp', ['ngRoute'])


console.log('oooooo')
import {
    mainController
} from '/controllers/mainController.js';

import {
    appService
} from '/js/appService.js'
//angular.module('ng').filter('tel', function () {});
//let myApp = angular.module('myApp', ['ngRoute'])
angular.module('myApp', ['ngRoute'])
    .controller('mainController', mainController)
    .service('appService', appService);

console.log('JOOOOO',appService)
