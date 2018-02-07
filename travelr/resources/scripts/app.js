var app = angular.module("travelr", ["ngRoute", "ngAnimate", "ngSanitize"]).config(function($routeProvider, $locationProvider) {

//Routes Confugaration
    $locationProvider.html5Mode(true);
	$routeProvider.when("/", {controller: "HomeController", templateUrl: "views/pages/home.html"}).

	when("/about", {controller: "AboutController", templateUrl: "views/pages/about.html"}).

	when("/contact", {controller: "ContactController", templateUrl: "views/pages/contact.html"}).

	when("/hotels", {controller: "HotelsController", templateUrl: "views/pages/hotels.html"}).

	when("/attractions", {controller: "AttractionsController", templateUrl: "views/pages/attractions.html"}).

	when("/planner", {controller: "PlannerController", templateUrl: "views/pages/planner.html"}).

	when("/notfound", {templateUrl: "404.html"}).

	otherwise('/notfound');

});

