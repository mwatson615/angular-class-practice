app.controller('DetailCtrl', function($scope, $routeParams, $http) {
	$scope.listVar = $routeParams.listVar;

	$http.get('list.json')
	.then((value) => {
		console.log("value", value)
		let list = value.data.list
		$scope.selectedItem = list[$scope.listVar]
	})
	// console.log(thingFromUrl)
})
