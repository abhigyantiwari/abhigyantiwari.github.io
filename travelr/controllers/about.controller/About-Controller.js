app.controller('AboutController', ['$scope', '$log', '$window', '$location', function($scope, $log, $window, $location){
	$scope.showContact = true;
	$scope.showAbout = true;
	if($location.url() === "/about"){
			$scope.showAbout = false;
		}
}]);