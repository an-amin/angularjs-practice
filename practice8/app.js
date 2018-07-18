/*
 * AngularAPP
 */

var myApp = angular.module('myModule', ['ngRoute']);

var myCtrl = function($scope){
	$scope.title = 'Learning Angular';
	$scope.subTitle = 'Practice 8 (angular route)';
	
	$scope.dhaka = 'Hello Dhaka';
	$scope.chittagong = 'Hello Chittagong';
	$scope.rajshahi = 'Hello Rajshahi';
	$scope.khulna = 'Hello Khulna';
	$scope.rangpur = 'Hello Rangpur';
	$scope.mymensingh = 'Hello Mymensingh';
	$scope.sylhet = 'Hello Sylhet';
	$scope.barishal = 'Hello Barishal';
};

myApp.controller('myCtrl', myCtrl);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/dhaka', {
			templateUrl	:'pg/dhaka.html',
			controller	:'myCtrl'
		})
		.when('/chittagong', {
			templateUrl	:'pg/chittagong.html',
			controller	:'myCtrl'
		})
		.when('/rajshahi', {
			templateUrl	:'pg/rajshahi.html',
			controller	:'myCtrl'
		})
		.when('/rangpur', {
			templateUrl	:'pg/rangpur.html',
			controller	:'myCtrl'
		})
		.when('/mymensingh', {
			templateUrl	:'pg/mymensingh.html',
			controller	:'myCtrl'
		})
		.when('/sylhet', {
			templateUrl	:'pg/sylhet.html',
			controller	:'myCtrl'
		})
		.when('/khulna', {
			templateUrl	:'pg/khulna.html',
			controller	:'myCtrl'
		})
		.when('/barishal', {
			templateUrl	:'pg/barishal.html',
			controller	:'myCtrl'
		});
});
