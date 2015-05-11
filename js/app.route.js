(function(){
    var app=angular.module("routes",["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'homeView.html',
            controller  : 'HomeCtrl'
        })
        .when('/:id', {
            templateUrl: 'gridView.html',
            controller: 'gridCtrl'
        })
        .when('/detail/:id', {
            templateUrl: 'detailView.html',
            controller: 'detailCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
})();