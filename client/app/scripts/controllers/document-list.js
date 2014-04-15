'use strict';

angular.module('clientApp')
  .controller('DocumentListController', function ($scope, $log, Restangular) {
    $scope.documents = Restangular.all('documents').getList().$object;
		$log.log('Setup documents', $scope.documents);
  });
