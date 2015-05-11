(function(){
	var app=angular.module("homepage",[]);

	app.controller("HomeCtrl",function($scope, mainInfo){

		mainInfo.success(function (data) {
		  	$scope.tableData = data;
		})		
		
	});

	app.controller('gridCtrl', function($scope, $routeParams, mainInfo) {

		$scope.id = $routeParams.id;

		mainInfo.success(function (data) {
			
			$scope.mainData = data[$scope.id].images;
		})

	});

	app.controller('detailCtrl', function($scope, $routeParams, mainInfo) {
		$scope.id = $routeParams.id;
		mainInfo.success(function (data) {
			$scope.mainData = data[$scope.id].images[$scope.id];
			console.log($scope.mainData);
		})
	})

})();