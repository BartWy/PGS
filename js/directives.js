'use strict';
(function () {
        let myApp = angular.module('myApp', [])

        myApp.directive('skiCams', function () {
            return {
                restrict: 'A',
                controller: 'skiCamsController',
                template: require('./views/cams.html')
            };
        });

myApp.directive('contactForm', function () {
            return {
                restrict: 'A',
                controller: 'contactFormController',
                template: require('./views/contact.html')
            };
        });
    }()
