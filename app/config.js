

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/', {
			controller: 'MainCtrl',
			templateUrl: 'partials/main.html'
		})
		.when('/list', {
			controller: 'ListCtrl',
			templateUrl: 'partials/list.html'
		})
		.when('/list/:listVar', {
			controller: 'DetailCtrl',
			templateUrl: 'partials/detail.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})
