var myApp = angular.module('myApp', []);

myApp.filter('slicce', function() {
  return function(arr, start, end) {
  if(arr.length > 0){
		return (arr || []).slice(start*4, end*4+4);
	}
	else{arr=[];}
  };
});

myApp.controller('portfolioCtrl', function($scope, jsonFactory) {
$scope.rowValue = 0;
$scope.setRowValue = function(num) {
	$scope.rowValue = num;
}
$scope.getRowValue = function() {
	return $scope.rowValue;
}
////////////////////
$scope.selected = 1;
$scope.setPage = function(index) {
	$scope.selected = index;
}
$scope.isSelected = function(index) {
    return $scope.selected === index;
}
///////////////////
$scope.number = 4;
$scope.getNumber = function(num) {
    return new Array(num);   
}
$scope.ukupno = {};
$scope.portfolio ={};
jsonFactory.getJSONAsync(function(results) {
    $scope.portfolio = results;
	$scope.ukupno = Object.keys(results).length;
	console.log("uzimam objekat")
});
$scope.getPagesNumber = function() {
	var pagesNo = Math.ceil($scope.ukupno/16);
	console.log("to je "+pagesNo);
	return new Array(pagesNo);   
}
/*var hasData = true;
var idx = 0;
$scope.schoolList = [];	  
while(hasData){
	var data = $scope.portfolio[idx];
	if (data){
		$scope.schoolList.push(data);
		idx++;
	}
	else{
		hasData=false;
	}
}*/
});//////////end of controller///////

myApp.factory('jsonFactory', function($http) {
  return {
    getJSONAsync: function(callback) {
      $http.get('_layout/js/ng/portfolio.json').success(callback).error(function(){
				alert("greska");
				});
				return callback;
    }
  };
});
/*
myApp.factory('pagesFactory', function($http) {
  return {
    getPagesNumber: function(callback) {
		return
    }
  };
});*/