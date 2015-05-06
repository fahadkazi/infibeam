(function(){
	var app=angular.module("homepage",[]);

	app.controller("HomeController",function($scope,$http,$filter){

		$http.get('/phones.json').success(function (data) {
		  	$scope.phones = data;
		})		
		
	});

})();