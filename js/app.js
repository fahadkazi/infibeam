var app = angular.module('infibeam', ['ngRoute', 'routes', 'homepage', 'sidebar']);

app.factory('mainInfo', function($http) { 
    return $http.get('data.json');
});
