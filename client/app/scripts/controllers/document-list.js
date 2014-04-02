'use strict';

angular.module('clientApp')
  .controller('DocumentListController', function ($scope, $log) {
    $scope.documents = [
			{ 'id': 1, 'title': 'An experiment in crossing pigs with birds', 'projectKey' : 'PROP-1234-ABC' },
			{ 'id': 2, 'title': 'A new kind of database', 'projectKey'  : 'PROP-1234-DEF' },
			{ 'id': 3, 'title': 'Fast food that is good for you', 'projectKey'  : 'PROP-6789-ABC' }
    ];
		$log.log('Setup documents');
  });
