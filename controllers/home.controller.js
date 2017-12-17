app.controller('homeController', ['$scope', function($scope){
	
	//Background Masala Image only for home page:
	
	$('document').ready(function(){
		$('body').css({"background-image" : "url(resources/images/home-bg.jpg)","background-attachment": "fixed", "background-position": "center top",
						"background-size" :"cover"});
	})

}])