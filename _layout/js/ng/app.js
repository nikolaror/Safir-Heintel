var myApp = angular.module('myApp', []);
myApp.controller('portfolioCtrl', function($scope, jsonFactory) {

$scope.number = 2;
$scope.getNumber = function(num) {
    return new Array(num);   
}
   $scope.ukupno = {};
   $scope.portfolio ={};
   $scope.lista ={};

   jsonFactory.getJSONAsync(function(results) {
    $scope.portfolio = results;
	$scope.ukupno = Object.keys(results).length;
	  });
	/////////////////
	/*jsonFactory.getSL(function($scope.portfolio) {
			$scope.lista = $scope.portfolio;
	  });*/
	/*
var rawData = {"0":{"school_name":"FAKE ELEMENTARY"},
                         "1":{"school_name":"CENTRAL HIGH"},
                         "2":{"school_name":"OAK RIDGE ELEMENTARY"},
                         "3":{"school_name":"PINE MEADOW ELEMENTARY"},
                         "4":{"school_name":"AMERICAN MIDDLE"},
                         "5":{"school_name":"BIG SENIOR HIGH"},
                         "6":{"school_name":"ST FRANCIS ELEMENTARY SCHOOL"}
                         };*/
    
	
	
	
	
	
	/////////////////
	/////////////////
	/*    $scope.currentPage = 1;
    $scope.pageSize = 10;
	$scope.numberOfPages=function(){
        return Math.ceil(ukupno/pageSize);                
    }*/
	/////////
});
myApp.factory('jsonFactory', function($http) {
  return {
    getJSONAsync: function(callback) {
      $http.get('_layout/js/ng/portfolio.json').success(callback).error(function(){
				alert("greska");
				});
    },
	getSL:function(portfolio) {
    var hasData = true;
    var idx = 0;
    var schoolList = [];
    while(hasData){
        data = portfolio[idx];
        if (data){
            schoolList.push(data);
            idx++;
        }
        else{
            hasData=false;
        }
		}
		portfolio = schoolList;
		return portfolio;
	}
  };
});



myApp.filter('slicce', function() {
  return function(arr, start, end) {
    return (arr || []).slice(start, end);
  };
});