'use strict';

angular.module('clientApp').controller('FormController', function ($scope, $log, _, Restangular) {

	$scope.document = {};
	Restangular.one('forms', 1).get().then(function(document) {
		$scope.document = document;
		$scope.formGroups = _.groupBy(document.layout, 'formGroup');
		$scope.sortOrder = 'formGroup';
	});
		
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
		$log.log('Save doc', document);
	};

});
