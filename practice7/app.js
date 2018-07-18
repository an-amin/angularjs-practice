/*
 * AngularAPP
 */

var myApp = angular.module('myModule', []);

var myController = function($scope, myService, myFactory){
	$scope.title = 'Learning Angular';
	$scope.subTitle = 'Practice 7 (anguler service & factory)';
	$scope.calc1 = function(x,y){
		$scope.res1 = myService.add(x,y);
		$scope.res2 = myService.sub(x,y);
		$scope.res3 =  myService.multi(x,y);
		$scope.res4 =  myFactory.div(x,y);
		$scope.res5 = myFactory.mod(x,y);
		$scope.res6 = myFactory.exp(x,y);;
	};
};

myApp.controller('myCtrl', myController);

myApp.service('myService', function(){
	this.add = function(x,y){
		return Number(x)+Number(y);
	};
	this.sub = function(x,y){
		return Number(x)-Number(y);
	};
	this.multi = function(x,y){
		return Number(x)*Number(y);
	};
});

myApp.service('myFactory', function(){
	var obj = {};
	obj.div = function(x,y){
		return Number(x)/Number(y);
	}
	obj.mod = function(x,y){
		return Number(x)%Number(y);
	}
	obj.exp = function(x,y){
		return Number(x)**Number(y);
	};
	return obj;
});