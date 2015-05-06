(function(){
    var app=angular.module("routes",["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'homeView.html',
                controller  : 'HomeController'
            })
    });
})();