var myApp=angular.module("myApp",['ngRoute']);

myApp.config(['$routeProvider',function ($routeProvider){
    $routeProvider.
    when('/education',{
        templateUrl:'education.html',
        controller:'eduController'
    }).
    when('/achievements',{
        templateUrl:'achievements.html',
        controller:'achieveController'
    }).
    otherwise({
        redirectTo:'/education'
    });
}]);