console.log('oooooo')
//let myApp = angular.module('myApp', [])


import {mainController} from 'controllers/mainController.js';
console.log({mainController})


console.log(1)
angular.module('myApp', [])
    .controller('mainController', mainController);