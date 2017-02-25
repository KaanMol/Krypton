var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "modules/auth/view/login_view.html"
    })
    .when("/register", {
        templateUrl : "modules/auth/view/register_view.html"
    });

    $locationProvider.html5Mode(true);
});
