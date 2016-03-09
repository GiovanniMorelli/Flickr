flickr.controller('iconAsideRight', function ($scope, $timeout, $mdSidenav, $log) {

    $scope.icon="collections";
    $scope.fill = "white";
    $scope.size = 40;
    $scope.$parent.$parent.setIconRight = function(){
        if($("#sectionSideBarRight").css("width")=="0px"){
            $( "#sectionSideBarRight" ).animate({
                width: "200px"
            }, 600 );
        }else{
            $( "#sectionSideBarRight" ).animate({
                width: "0px"
            }, 600 );
        }

        if($scope.icon=="arrow_forward"){
            $scope.icon="collections";
        }else{
            $scope.icon="arrow_forward";
        }
        console.log($scope);
    };

});
