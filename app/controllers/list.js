app.controller('ListCtrl', function($scope, $http) {
	$scope.myVariable = "angular"
	// console.log("here is the list controller")

	$http.get(`list.json`) //returns promise
	.then(function(stuff) {
		// console.log('stuff', stuff)
		$scope.list = stuff.data.list;
	})
})
