var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "profilContent.html"
    }
  );
});

app.controller("AppCtrl", function($scope){
  $scope.model = {
    message: "This is my app!!!"
  }
});