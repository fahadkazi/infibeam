(function(){
    var app=angular.module("routes",["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'homeView.html',
                controller  : 'HomeController'
            }).
            when('/:id', {
        templateUrl: 'images-grid.html',
        controller: 'imagesDetail'
      }).
      otherwise({
        redirectTo: '/phones'
      });
    });
})();