'use strict';

/**
 * @ngdoc overview
 * @name dailweddinginfo2App
 * @description
 * # dailweddinginfo2App
 *
 * Main module of the application.
 */
angular
  .module('dailweddinginfo2App', [
    'firebase',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'
      })
      .when('/rsvp', {
        templateUrl: 'views/rsvp.html',
        controller: 'RSVPCtrl'
      })
       .when('/lodging', {
        templateUrl: 'views/lodging.html',
        controller: 'lodgingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
