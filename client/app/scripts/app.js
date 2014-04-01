'use strict';

angular.module('clientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/documents', {
        templateUrl: 'views/documents.html',
        controller: 'DocumentsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
