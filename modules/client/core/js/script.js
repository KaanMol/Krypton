var app = angular.module("Project-Krypton", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "../../auth/view/index_view.html"
  })
  .when("/login", {
    templateUrl : "../../auth/view/login_view.html"
  });
});
