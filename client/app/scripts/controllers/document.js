'use strict';

angular.module('clientApp')
  .controller('DocumentController', function ($scope, $log) {
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
					labelColumnWidth: 3,
					inputColumnWidth: 2
				},
				{
					formGroup: 1,
					key : 'Age',
					labelColumnOffset: 6,
					labelColumnWidth: 3,
					inputColumnWidth: 2
				},
				{
					formGroup: 2,
					key : 'Surname',
					labelColumnWidth: 3,
					inputColumnWidth: 2
				}
				]
			};
		$scope.predicate = 'formGroup';
			/*var groups = [];

			$scope.formGroups = function() {
				groups = [];
			  return $scope.document;
			}

			$scope.filterFormGroups  TODO CONTINUE HERE = function(player) {
			        var teamIsNew = indexedTeams.indexOf(player.team) == -1;
			        if (teamIsNew) {
			            indexedTeams.push(player.team);
			        }
			        return teamIsNew;
			    }
			}	*/
		$log.log('Load doc');
  });
