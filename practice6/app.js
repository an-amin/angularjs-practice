/*
 * AngularAPP
 */

var myApp = angular.module('myModule',[]);

var myController = function($scope, $log, $location, $http){
	$scope.title='Learning AngularJS';
	$scope.subTitle='Practice 5';
	
	$scope.showEmployeeData = function(){
		$log.info('showing data');
	$http.get('employeeData.json').then(function(response){
		$scope.employees = response.data;
	});

	};
	$scope.hideEmployeeData = function(){
		$log.info('hiding data');
		$scope.employees = [];
	};

	$scope.url = $location.absUrl('/amin');

};
myApp.controller('myController',myController);

myApp.filter('salaryStatus', function(){
	return function(status){
		switch(status){
			case 0:
				return 'Unpaid';
				break;
			case 1:
				return 'Paid';
				break;
			case 2:
				return 'Advanced';
				break;
			default:
				return 'undefined';
		}
	};
});