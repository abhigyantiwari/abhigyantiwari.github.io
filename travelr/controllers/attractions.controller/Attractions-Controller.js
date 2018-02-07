app.controller('AttractionsController', ['$scope','$http', function($scope, $http) {

    $scope.showContact = true;
    $scope.showAbout = true;
    $(".fa-spinner").hide();
    $(".network-err").hide();

    $scope.searchAttraction = function(attraction, attractionInput) {

        if (attraction == null || attraction == "" || attraction == undefined) {

            document.getElementsByClassName("attract-err")[0].textContent = "Please Select Attraction!";
            return;

        }
        if (attractionInput == null || attractionInput == "") {

            document.getElementsByClassName("attract-err")[0].textContent = "Please enter a place, city or state name!";
            return;

        }

        $(".fa-spinner").show();


            $http.get("api/place.api.php?city=" + attractionInput + "&type=" + attraction + "&keyword=" + attraction + "+" + attractionInput)
            .then(function(response) {

                $scope.attractions = JSON.parse(response.data);
                $(".fa-spinner").hide();

            }, function() {
                $(".network-err").show();
                $("document").ready(function() {
                    $(".fa-spinner").hide()
                    setTimeout(function() {
                        $(".network-err").hide();
                    }, 5000);
                });

            });
    }

    $scope.checkRating = function(rating){
    	if(rating == "" || rating == null){
    		return 'NA';
    	}
    	else{
    		return rating;
    	}
    }

}]);