'use strict';

angular.module('clientApp')
  .controller('DocumentController', function ($scope, $log, _) {
    $scope.document =
			{
				id : 1,
				key : 'PROJ-123',
				title : 'A better way of designing databases',
				data: {
					FirstName: 'Dave',
					Surname: 'Smith',
					Age: 45
				},
				layout : [ {
					formGroup: 1,
					key : 'FirstName',
					labelColumnWidth: 2,
					inputColumnWidth: 3
				},
				{
					formGroup: 1,
					key : 'Age',
					labelColumnOffset: 1,
					labelColumnWidth: 3,
					inputColumnWidth: 3
				},
				{
					formGroup: 2,
					key : 'Surname',
					labelColumnWidth: 3,
					inputColumnWidth: 2
				}
				]
			};
		$scope.formGroups = _.groupBy($scope.document.layout, 'formGroup');
		$scope.sortOrder = 'formGroup';
		
		/*
		 * Return array of css classes 
		 * that control the placement aspects for the label within the layout
		 */
		$scope.labelClass = function(layout) {
			var classes = ['control-label'];
			if (layout.labelColumnOffset) {
				classes.push('col-sm-offset-' + layout.labelColumnOffset);
			}
			classes.push('col-sm-' + layout.labelColumnWidth);
			return classes;
		};

		/*
		 * Return array of css classes 
		 * that control the placement aspects for the control within the layout
		 */
		$scope.inputClass = function(layout) {
			var classes = [];
			if (layout.inputColumnOffset) {
				classes.push('col-sm-offset-' + layout.inputColumnOffset);
			}
			classes.push('col-sm-' + layout.inputColumnWidth);
			return classes;
		};

/*		
		// Group fields by formGroups
		var indexedFormGroups = [];

		$scope.formGroups = function() {
			indexedFormGroups = [];
		  return $scope.document;
		};

		$scope.filterFormGroups= function(layout) {
			var isNew = indexedFormGroups.indexOf(layout.formGroup) == -1;
			if (isNew) {
		    indexedFormGroups.push(layout.formGroup);
			}
			return isNew;
		};
*/
		$log.log('Load doc');
  });
