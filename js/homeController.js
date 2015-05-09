(function(){
	var app=angular.module("homepage",[]);

	app.controller("HomeController",function($scope,$http,$filter){

		$http.get('data.json').success(function (data) {
		  	$scope.tableData = data;
		  	console.log($scope.tableData);
		})		
		
	});

	app.controller('imagesDetail', function($scope, $routeParams, $http) {

		$scope.id = $routeParams.id;

		$http.get('data.json').success(function (data) {
			
			angular.forEach(data, function (temp) {
				
				console.log($scope.id);
				$scope.images = temp.images;
				console.log(temp);
			})
		})

	});

})();