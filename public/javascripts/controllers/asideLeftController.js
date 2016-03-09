flickr.controller('iconAsideLeft', function ($scope, $timeout, $mdSidenav, $log) {


    $scope.icon="toc";
    $scope.fill = "white";
    $scope.size = 40;
    $scope.$parent.$parent.setIconLeft = function(){

        if($("#sectionSideBarLeft").css("margin-left")=="-200px"){
            $( "#sectionSideBarLeft" ).animate({
                marginLeft: "0px"
            }, 600 );
        }else{
            $( "#sectionSideBarLeft" ).animate({
                marginLeft: "-200px"
            }, 600 );
        }

        if($scope.icon=="arrow_back"){
            $scope.icon="toc";
        }else{
            $scope.icon="arrow_back";
        }
        console.log($scope);
    };


});