var app = angular.module('samosa', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when("/", {
        controller: 'homeController',
        templateUrl: "views/home.html",
        title: "Hey, Welcome!"
    }).

    when("/blog", {
        controller: "blogController",
        templateUrl: "views/blog.html",
        title: "Blog / Journal"
    }).

    when("/portfolio", {
        controller: "portfolioController",
        templateUrl: "views/portfolio.html",
        title: "Portfolio | Abhigyan Tiwari"
    }).

    when("/about", {
        controller: "aboutController",
        templateUrl: "views/about.html",
        title: "Words Bou Me"
    }).

    when("/notfound", {
        templateUrl: "404.html",
        title: "404"
    }).

    otherwise({
        redirectTo: "/notfound"
    });

}]);

app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);