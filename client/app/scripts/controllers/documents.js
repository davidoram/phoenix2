'use strict';

angular.module('clientApp')
  .controller('DocumentsController', function ($scope, $log) {
    $scope.documents = [
			{ 'id': 1, 'title': 'Doc1' },
			{ 'id': 2, 'title': 'Doc2' },
			{ 'id': 3, 'title': 'Doc3' }
    ];
		$log.log('Setup documents');
  });
