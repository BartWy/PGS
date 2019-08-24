//'use strict';
//(function () {
//    let myApp = angular.module('myApp', [])
//
//
//    myApp.controller('mainController', function ($scope) {
//        console.log('Angular')
//        let scope = this
//        scope.wyświetl = 'EEEEEEJ no WYŚWIETL'
//        console.log('SCOPE',scope)
//        console.log('$scope',$scope)
//    });
//
//})()

let myApp = angular.module('myApp', [])
export default class mainController {
  constructor() {
    this.name = "Bobby Tables";
  }
}
