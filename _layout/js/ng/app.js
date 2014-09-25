var myApp = angular.module('myApp', []);
myApp.controller('portfolioCtrl', function($scope, jsonFactory) {
//////////////////////////////////////
   var rawData = {
    "0": {
        "id": 1,
        "title": "proizvod 55555",
        "img_src": "_content/portfolio/220x217-5.png",
        "url": "_content/portfolio/220x217-5.png"
    },
    "1": {
        "id": 2,
        "title": "proizvod 4404",
        "img_src": "_content/portfolio/220x217-4.png",
        "url": "_content/portfolio/220x217-4.png"
    },
    "2": {
        "id": 3,
        "title": "proizvod 333",
        "img_src": "_content/portfolio/220x217-3.png",
        "url": "_content/portfolio/220x217-3.png"
    },
    "3": {
        "id": 4,
        "title": "proizvod 222",
        "img_src": "_content/portfolio/220x217-2.png",
        "url": "_content/portfolio/220x217-2.png"
    },
    "4": {
        "id": 5,
        "title": "proizvod 111",
        "img_src": "_content/portfolio/220x217-1.png",
        "url": "_content/portfolio/220x217-1.png"
    }
};
    var hasData = true;
    var idx = 0;
    $scope.schoolList = [];
    while(hasData){
        var data = rawData[idx];
        if (data){
            $scope.schoolList.push(data);
            idx++;
        }
        else{
            hasData=false;
        }
    }
///////////////////////////////////





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
});


function myCtrl($scope){
 
}



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