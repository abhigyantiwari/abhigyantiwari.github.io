app.controller('ContactController', ['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.showContact = true;
	$scope.showAbout = true;
	if($location.url() === "/contact"){
		$scope.showContact = false;
	}

	$scope.contact = function(first_name, last_name, email, city, mssg){
		if(first_name == "" || first_name == null || 
			last_name == "" || last_name == null ||
			email == "" || email == null ||
			city == "" || city == null ||
			mssg == "" || mssg == null){

			document.getElementsByClassName("field-empty")[0].innerHTML = "Fill all the fields!";

;		}
else{

	var data = [first_name, last_name, email, city, mssg];
		$http.post("controllers/contact.controller/contact.controller.php", data)
		.then(function(response){
			document.querySelector("form").style.display = 'none';
			document.getElementsByClassName("feedback-sent")[0].innerHTML = "Thanks for feedback!<br><span class='text-info'>We love feedbacks and we'll try to respond to your email as soon as possible!</span>";
		})
		.then(function(response){
			console.log("Response "+JSON.stringify(response));
		});
}
	}
}]);