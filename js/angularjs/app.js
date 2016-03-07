	var app = angular.module('portApp', ['ngRoute', 'ngAnimate']);
   // Routing template, to great an SPA. 
   // STILL NEEDS CLEAN UP, AND CODE ORGANISATION
	app.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: './pages/home.html',
				controller: 'mainController'
			})
			.when('/welcome', {
				templateUrl: './pages/welcome.html',
				controller:  'mainController'
			})
			.when('/projekter', {
				templateUrl: './pages/projekter.html',
				controller: 'projektController'
			})
			.when('/erfaringer', {
				templateUrl: '../../pages/erfaringer.html',
				controller: 'erfaringerController'
			})
			.when('/hobbies', {
				templateUrl: '../../pages/hobbies',
				controller: 'hobbiesController'
			})
			.otherwise('/welcome');

	});
  // For animating the pages
	app.run(function ($rootScope, $location) {
	  $rootScope.$on("$locationChangeStart", function (event, next, current) {
	    $rootScope.path = $location.path();
	  });
	});
	// Work in progress, saving a variable through route change
	app.factory('dataFactory', function() {
		var name = '';

		function setData(n) {
			name = n;
		}
		return {
        getData: function() {
          return name: name x½     
        },
        setData: setData
    }
})
	// Also work in progress
	app.controller('mainController', ['$scope', 'dataFactory', '$rootScope', function($scope, $rootScope, $location, dataFactory){
	  'use strict';
	   
	   // $scope.dataArray.push(data);
	    $scope.data = [];

	  // I put the data array in the $scope so it can be displayed in the browser window and you can see the results:
	  
	  	$scope.factoryData = dataFactory.getData();
	  // Now, whenever the button is clicked, this method is run.
	  // It then stores the name in the 'data' array defined above.

	  $scope.submitForm = function(name) {

	  		dataFactory.setData(name)
	   	    // $scope.data.push(name);
		
		
	     $location.path('/welcome');

	  };

	  $scope.clicktest = function() {
	  		console.log($scope.data)
	  }

	  

	}]);

	//Empty controllers, for work in progress pages

	app.controller('projektController', function($scope){


	});

	app.controller('erfaringerController', function($scope){


	});

	app.controller('hobbiesController', function($scope){


	});