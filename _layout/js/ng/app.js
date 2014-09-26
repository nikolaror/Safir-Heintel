var myApp = angular.module('myApp', []);

myApp.filter('slicce', function() {
  return function(arr, start, end) {
  if(arr.length > 0){
		return (arr || []).slice(start*4, end*4+4);
		//return arr.slice(start*4, end*4+4);
	}
	else{arr=[];}
  };
});
myApp.controller('portfolioCtrl', function($scope, jsonFactory) {

$scope.rowValue = 0;
$scope.setIndex = function(num) {
	$scope.rowValue = num;
}
$scope.getRowValue = function() {
	return $scope.rowValue;
}

$scope.number = 4;
$scope.getNumber = function(num) {
    return new Array(num);   
}

   $scope.ukupno = {};
   $scope.portfolio ={};
   jsonFactory.getJSONAsync(function(results) {
    $scope.portfolio = results;
	$scope.ukupno = Object.keys(results).length;
	  });

	var hasData = true;
    var idx = 0;
    $scope.schoolList = [];	  
    while(hasData){
        //var data = rawData[idx];////////promena
		var data = $scope.portfolio[idx];//rawData[idx];////////promena
        if (data){
            $scope.schoolList.push(data);
            idx++;
        }
        else{
            hasData=false;
        }
    }
});//////////end of controller///////

myApp.factory('jsonFactory', function($http) {
  return {
    getJSONAsync: function(callback) {
      $http.get('_layout/js/ng/portfolio.json').success(callback).error(function(){
				alert("greska");
				});
				return callback;
    },
	getCustomers:function() {
		var promise = $http({
			method : 'POST',
			url : '_layout/js/ng/portfolio.json'
		}).success(function(data, status, headers, config) {
			$log.log('Done');
			angular.forEach(data, function(c) {
				$log.log(c.firstName);
			});
			customers = data;
			return customers;
		});    

		return promise; 
	}
  };
});