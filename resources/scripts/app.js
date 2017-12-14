var app = angular.module('samosa', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {

	$routeProvider.when("/", {controller: "homeController", templateUrl: "views/home.html"}).

	when("/blog", {controller: "blogController", templateUrl: "views/about.html"}).

	when("/portfolio", {controller: "portfolioController", templateUrl: "views/portfolio.html"}).

	when("/about", {controller: "aboutController", templateUrl: "views/about.html"}).

	when("/notfound", {templateUrl: "404.html"}).

	otherwise("/notfound");

}])

app.service('titleProvider', ['', function(){
	$scope.whichPage = "";
}])