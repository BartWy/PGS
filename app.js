let myApp = angular.module('myApp', ['ngRoute'])


console.log('oooooo')
import {
    mainController
} from '/controllers/mainController.js';
console.log({
    mainController
})
import {
    appService
} from '/js/appService.js'
angular.module('ng').filter('tel', function () {});
//let myApp = angular.module('myApp', ['ngRoute'])
console.log(1)
    (function () {
        angular.module('myApp', ['ngRoute'])
            .controller('mainController', mainController)
            .service('appService', appService);

    })();
