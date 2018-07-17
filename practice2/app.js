/*
 * AngularAPP
 */

var aminsApp = angular.module('todaysModule', []);

var aminsContro = function($scope){
	$scope.title = 'Learning AngularJS';
	$scope.subTitle = 'Practice 2';
	$scope.bindPara = 'A quick brown fox jumped over the lazy dogs.';
	$scope.var1 = 'some string';
};

aminsApp.controller('thisOneisController', aminsContro);