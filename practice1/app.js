/*
 * AngularAPP
 */

 var myApp = angular.module('myModule', []);

 var myController = function($scope){
 	
	$scope.title="Learning AngularJS";
	$scope.subTitle="Practice 1";

 	$scope.msg = 'Hello world';
 	$scope.students = [
 		{
 			id:'A123',
 			name:'Amin'
 		},
 		{
 			id:'B234',
 			name:'Hasan'
 		},
 		{
 			id:'C345',
 			name:'Wahed'
 		}
 	];
 	
 };

 myApp.controller('myCtrl', myController);