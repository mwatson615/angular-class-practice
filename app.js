console.log("app.js")

const app = angular.module('whateverApp', ['ngRoute'])

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

app.controller('ListCtrl', function($scope, $http) {
	$scope.myVariable = "angular"
	// console.log("here is the list controller")

	$http.get(`list.json`) //returns promise
	.then(function(stuff) {
		console.log('stuff', stuff)
		$scope.list = stuff.data.list;
	})
})

app.controller('MainCtrl', function($scope) {
	$scope.myVariable = "potatoes"
	$scope.otherVariable = "french fries"
})
