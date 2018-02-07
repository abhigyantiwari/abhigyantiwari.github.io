app.controller('PlannerController', ['$scope', function($scope) {

    //Show Nav links and show body and nav by defult. When user requests print hide everything and show the table to be printed.

    $scope.showContact = true;
    $scope.showAbout = true;
    $scope.showNav = true;
    $scope.showBody = true;
    $scope.showTable = false;

    $scope.plannerArr = {
        "destination": [],
        "activity": [],
        "duration": 0,
        "backpack": [],
        "budget": 0.00,
        "todoBefore": [],
        "todoDuring": []
    }

    $scope.addPlan = function(planInput, planDetail) {

    	if (planInput == "" || planInput == null) { alert("Fill the fields"); return}

        switch (planDetail) {
            case 'details-destination':
                $scope.plannerArr.destination.push(planInput);
                break;
            case 'details-activity':
                $scope.plannerArr.activity.push(planInput);
                break;
            case 'details-duration':
            	if(!(planInput > 0 || planInput == 0)){ alert("Going in Past?"); return}
                $scope.plannerArr.duration = planInput;
                break;
            case 'details-backpack':
                $scope.plannerArr.backpack.push(planInput);
                break;
            case 'details-budget':
            	if(!(planInput > 0 || planInput == 0)){ alert("Need Loan?"); return}
                $scope.plannerArr.budget = planInput;
                break;
            case 'details-todo-before':
                $scope.plannerArr.todoBefore.push(planInput);
                break;
            case 'details-todo-during':
                $scope.plannerArr.todoDuring.push(planInput);
                break;
            default:
                alert("We are having issues!");
                break;
        }
    }


    $scope.removePlan = function(planInput, planType){

    	switch (planType) {
    		case 'destination':
    			for(var i = $scope.plannerArr.destination.length; i >= 0; i--){
    				if($scope.plannerArr.destination[i] == planInput){
    					$scope.plannerArr.destination.splice(i,1);
    				}
    			}
    			break;
    		case 'activity':
    			for(var i = $scope.plannerArr.activity.length; i >= 0; i--){
    				if($scope.plannerArr.activity[i] == planInput){
    					$scope.plannerArr.activity.splice(i,1);
    				}
    			}
    			break;
    		case 'backpack':
    			for(var i = $scope.plannerArr.backpack.length; i >= 0; i--){
    				if($scope.plannerArr.backpack[i] == planInput){
    					$scope.plannerArr.backpack.splice(i,1);
    				}
    			}
    			break;
    		case 'todoBefore':
    			for(var i = $scope.plannerArr.todoBefore.length; i >= 0; i--){
    				if($scope.plannerArr.todoBefore[i] == planInput){
    					$scope.plannerArr.todoBefore.splice(i,1);
    				}
    			}
    			break;
    		case 'todoDuring':
    			for(var i = $scope.plannerArr.todoDuring.length; i >= 0; i--){
    				if($scope.plannerArr.todoDuring[i] == planInput){
    					$scope.plannerArr.todoDuring.splice(i,1);
    				}
    			}
    			break;
    		default:
    			alert("We are having issues!");
    			break;
    	}

    }

    $scope.printPlan = function(){

        if(!($scope.plannerArr.destination.length > 0) && !($scope.plannerArr.activity.length > 0) && !($scope.plannerArr.duration > 0)
            && !($scope.plannerArr.backpack.length > 0) && !($scope.plannerArr.budget > 0) && !($scope.plannerArr.todoBefore.length > 0)
            && !($scope.plannerArr.todoDuring.length > 0)){

            alert("Fill and add some Values than we can help print! :)");
        }
        else{
            $scope.showNav = false;
            $scope.showBody = false;
            $scope.showTable = true;
        }

    }

    $scope.backToPlanner = function(){
        $scope.showNav = true;
        $scope.showBody = true;
        $scope.showTable = false;
    }

    $scope.printPlanFinally = function(){
        window.print();
    }
}])