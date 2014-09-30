var myApp = angular.module('myApp', []);

myApp.filter('slicce', function() {
  return function(arr, start, end) {
  if(arr.length > 0){
		return (arr || []).slice(start*4+16*(end-1),start*4+4+16*(end-1));
	}
	else{arr=[];}
  };
});

myApp.controller('portfolioCtrl', function($scope, $location, $anchorScroll, $timeout, $q, $interval, jsonFactory) {
$scope.rowValue = 0;
$scope.setRowValue = function(num) {
	$scope.rowValue = num;
}
$scope.getRowValue = function() {
	return $scope.rowValue;
}
$scope.selected = 1;
var stop;
$scope.myValue = true;
$scope.setPage = function(index) {
	$scope.myValue = false;
	if ( angular.isDefined(stop) ) return;
	
	stop = $interval(function() {
	$scope.selected = index;
	$location.hash('gallery');
	$anchorScroll();
	$scope.stopTimer();
    }, 500);  
}
$scope.stopTimer = function() {
      if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        stop = undefined;
		$scope.myValue = true;
      }
};
/*
$scope.setPage = function(index) {
	$scope.selected = index;
	$location.hash('gallery');
	$anchorScroll();
}
*/
$scope.isSelected = function(index) {
    return $scope.selected === index;
}

$scope.number = 4;
/*$scope.getNumber = function(num) {
	$scope.arr = [];
	for(var i = 5; i <= $scope.number; i++){
        $scope.arr.push(i);
    }
	console.log("arr je:"+$scope.arr);
    return $scope.arr;   
}*/
$scope.getNumber = function(num) {
    return new Array(num);   
}
$scope.ukupno = Object.keys(jsonFactory.callback).length;
$scope.portfolio ={};
jsonFactory.getJSONAsync(function(results) { 	
	$scope.portfolio = results;
	$scope.ukupno = Object.keys(results).length;
});

$scope.getPagesNumber = function() {
	var pagesNo = Math.ceil($scope.ukupno/16);
	return new Array(pagesNo);   
}
});//////////end of controller///////

myApp.factory('jsonFactory', function($http) {
  var callback=[];
  return {
	  callback: function(){
		return callback;
	},
    getJSONAsync: function(callback) {
      $http.get('_layout/js/ng/portfolio.json').success(callback).error(function(){
				alert("greska");
				});
				return callback;
    }
  };
});