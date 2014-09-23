'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/landing.html', controller: 'landingController'});
  $routeProvider.when('/event', {templateUrl: 'partials/event.html', controller: 'eventController'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'contactController'});
  $routeProvider.when('/location', {templateUrl: 'partials/location.html', controller: 'locationController'});
  $routeProvider.otherwise({redirectTo: '/'});

}]);
