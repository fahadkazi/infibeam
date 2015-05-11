(function(){
	var app=angular.module("sidebar",[]);

	app.controller("sidebarController",function($scope, mainInfo){

		mainInfo.success(function (data) {
		  	$scope.tableData = data;
		})		
		
	});

	app.directive("sidebar",function(){
		return{
			restrict:"E",
			templateUrl:"sideBar.html",
			controller:function($scope){

				$scope.currentTab = 1;

				$scope.canShowSidebar = false;

				$scope.isActive = function(tab){
					
					return tab===$scope.currentTab;
				}
			}
		};
	});

})();