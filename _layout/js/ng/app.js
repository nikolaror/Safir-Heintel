var myApp = angular.module('myApp', []);
jsonObject = {
    "row1": [
    {
	id:1,
    title: "proizvod 555",
	img_src:"_content/portfolio/220x217-5.png",
	url:"_content/portfolio/220x217-5.png"
  }, 
  {
	id:2,
    title: "proizvod 444",
	img_src:"_content/portfolio/220x217-4.png",
	url:"_content/portfolio/220x217-4.png"
  },
  {
	id:3,
    title: "proizvod 333",
	img_src:"_content/portfolio/220x217-3.png",
	url:"_content/portfolio/220x217-3.png"
  },
  {
	id:4,
    title: "proizvod 222",
	img_src:"_content/portfolio/220x217-2.png",
	url:"_content/portfolio/220x217-2.png"
  }],
    "row2": [
    {
	id:5,
    title: "proizvod 111",
	img_src:"_content/portfolio/220x217-1.png",
	url:"_content/portfolio/220x217-1.png"
  }],
  };
myApp.controller("portfolioCtrl", function($scope, $http, getJson){
  $scope.product = {
	id:1,
    title: "proizvod 111",
	img_src:"_content/portfolio/220x217-5.png",
	url:"_content/portfolio/220x217-1.png"
  };
   $scope.portfolio ={};
   $scope.portfolio = jsonObject;
   ////////////////
     
				
            
   /////////////////////http://leftshift.io/8-tips-for-angular-js-beginners////////
});


app.factory("getJson", function($http) {
var json = {};
var modify = {};
  var modify.addItem = function(item) {
json = $http.get('portfolio.json').success (function(data){
                $scope.guitarVariable = data;
				return json;})
				}
  return json;
  });
