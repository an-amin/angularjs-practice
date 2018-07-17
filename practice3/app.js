/*
 * AngularAPP
 */
var ourApp = angular.module('ourModule',[]);
var ourController = function($scope){
	$scope.title = "Learning AngularJS";
	$scope.subTitle = "Practice 3";
	$scope.var1=true;
	$scope.var2=false;
	$scope.var3=true;
	$scope.var4=false;
};
ourApp.controller('ourController', ourController);