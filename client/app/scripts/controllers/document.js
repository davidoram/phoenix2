'use strict';

angular.module('clientApp')
  .controller('DocumentController', function ($scope, $log, _) {
    $scope.document =
			{
				id : 1,
				key : 'PROJ-123',
				title : 'A better way of designing databases',
				data: {
					firstName: 'Dave',
					surname: 'Smith',
					age: 45
				},
				layout : [ {
					formGroup: 1,
					label : 'First name',
					key : 'firstName',
					labelColumnWidth: 2,
					inputColumnWidth: 3,
					type: 'text'
				},
				{
					formGroup: 1,
					label : 'Age',
					key : 'age',
					labelColumnOffset: 1,
					labelColumnWidth: 3,
					inputColumnWidth: 3,
					type: 'number'
				},
				{
					formGroup: 2,
					label : 'Surname',
					key : 'surname',
					labelColumnWidth: 3,
					inputColumnWidth: 2,
					type: 'text'
				}
				]
			};
		
		$scope.formGroups = _.groupBy($scope.document.layout, 'formGroup');
		$scope.sortOrder = 'formGroup';
		
		// Note: Type can be one of text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color.
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
		 * Save the data on the form
		*/
		$scope.save = function(document) {
			$log.log('Save doc');
		};

  });
