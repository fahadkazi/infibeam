(function(){
	var app=angular.module("sidebar",[]);

	app.directive("sidebar",function(){
		return{
			restrict:"E",
			templateUrl:"sideBar.html",
			controller:function($scope){

				$scope.currentTab = 1;

				$scope.isActive = function(tab){
					
					return tab===$scope.currentTab;
				}
			}
		};
	});

})();