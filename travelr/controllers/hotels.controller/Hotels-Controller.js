app.controller('HotelsController', ['$scope', '$http', function($scope, $http) {

    $scope.showContact = true;
    $scope.showAbout = true;
    $(".fa-spinner").hide();
    $scope.msg = true;
    $(".network-err").hide();

    $scope.hotelSearch = function(hotelInput) {

        $(".table").hide();
        $scope.msg = false;
        $(".fa-spinner").show();


        if (hotelInput == "" || hotelInput == null) {

            document.getElementsByClassName("hotel-input-empty")[0].textContent = "Please Enter a place name!";

        } else {
            $http.get("api/place.api.php?city=" + hotelInput + "&type=hotel&keyword=hotels")
                .then(function(response) {

                    $scope.hotels = JSON.parse(response.data);
                    $(".fa-spinner").hide();

                        $('html, body').animate({
                            scrollTop: $("#scroll").offset().top
                        }, 2000);

                }, function() {

                    $("document").ready(function() {
                        $(".fa-spinner").hide()
                        $(".network-err").show();
                        setTimeout(function() {
                            $(".network-err").hide();
                            $scope.msg = true;
                        }, 5000);
                    });
                });
        }
    }

    $scope.checkRating = function(rating) {
        if (rating == "" || rating == null) {
            return 'NA';
        } else {
            return rating;
        }
    }

}])