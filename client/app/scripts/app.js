'use strict';

angular.module('clientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'underscore',
  'ui.bootstrap',
	'restangular'
])
  .config(function ($routeProvider, RestangularProvider) {
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
      .when('/forms/:id', {
        templateUrl: 'views/form.html',
        controller: 'FormController'
      })
      .otherwise({
        redirectTo: '/'
      });

		// Configure Restangular
		// TODO: configure these settings
    RestangularProvider.setBaseUrl('http://localhost:9292/api');
			
  });
