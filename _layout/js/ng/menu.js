var myApp = angular.module('myApp', []);

myApp.controller('menuCtrl', function ($scope) {
    $scope.states = {};
    $scope.states.activeItem = 'index';
    $scope.items = [{
        id: 'index',
        title: 'POČETAK',
		link:'index.html'
    }, {
        id: 'profil',
        title: 'PROFIL',
		link:'profil.html'
    }, {
        id: 'portfolio',
        title: 'PORTFOLIO',
		link:'portfolio.html'
    }, {
        id: 'onama',
        title: 'O NAMA',
		link:'onama.html'
    },{
        id: 'kontakt',
        title: 'KONTAKT',
		link:'kontakt.html'
    }];
});