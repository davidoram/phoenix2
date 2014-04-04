'use strict';

angular.module('clientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'underscore',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/documents', {
        templateUrl: 'views/document-list.html',
        controller: 'DocumentListController'
      })
      .when('/documents/:id', {
        templateUrl: 'views/document.html',
        controller: 'DocumentController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
