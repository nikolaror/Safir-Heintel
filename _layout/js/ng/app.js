var myApp = angular.module('myApp', []);

myApp.filter('slicce', function() {
  return function(arr, start, end) {
  if(arr.length > 0){
		return (arr || []).slice(start*4+16*(end-1),start*4+4+16*(end-1));
	}
	else{arr=[];}
  };
});

myApp.controller('portfolioCtrl', function($scope, $location, $anchorScroll, $interval, jsonFactory) {
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
	$location.hash('gallery');
	$anchorScroll();
	$scope.selected = index;	
	stop = $interval(function() {


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

$scope.isSelected = function(index) {
    return $scope.selected === index;
}

$scope.number = jsonFactory.getNumber();
$scope.getNumber = function(num) {
    return jsonFactory.getNumberArray(num);
}



$scope.ukupno = 0;//Object.keys(jsonFactory.callback).length;
$scope.portfolio ={};
$scope.ukupno = jsonFactory.getUkupno();//Object.keys(jsonFactory.callback()).length;
$scope.portfolio ={};
jsonFactory.getJSONAsync(function(results) { 
	$scope.portfolio = results;
	$scope.ukupno = Object.keys(results).length;
});

$scope.getPagesNumber = function() {
	return jsonFactory.getPagesNo($scope.ukupno); 
}
});//////////end of controller///////

myApp.factory('jsonFactory', function($http) {
	var callback=[];
	var service = {};
	var number = 4;
	var portfolio =[];
	var ukupno = 0;

	service.getNumberArray = function(num){
			return new Array(num); 
	},
	service.getNumber = function(){
			return number;
	},
	service.getPortfolio = function(){
		service.getJSONAsync(service.portfolio);
		return portfolio;
	},
	service.getUkupno = function(){
		ukupno = Object.keys(portfolio).length;
		return ukupno;
	},
	service.callback = function(){
		return callback;
	},
	service.getPagesNo = function(pagesno){
		var pagesNo = Math.ceil(pagesno/16);
		return new Array(pagesNo);
	},
	service.getJSONAsync = function(callback) {
	  $http.get('_layout/js/ng/portfolio.json').success(callback).error(function(){alert("greska");});
	  return callback;
	};
	return service;

});