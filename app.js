console.log("app.js")

var app = angular.module('whateverApp', ['ngRoute'])

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainCtrl',
			templateUrl: 'partials/main.html'
		})
		.when('/list', {
			controller: 'ListCtrl',
			templateUrl: 'partials/list.html'
		})
})

app.controller('ListCtrl', function($scope) {
	$scope.myVariable = "angular"
	console.log("here is the list controller")
})

app.controller('MainCtrl', function($scope) {
	$scope.myVariable = "potatoes"
	$scope.otherVariable = "french fries"
})
