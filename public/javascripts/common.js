flickr.controller('setCommonVariables',function($scope){
    $scope.init = function () {
        $scope.currentPage=0;
        $scope.lastImages =[];
        $scope.flickrApi = new Flickr({
            api_key: ""//add your api_key
        });
    };
    $scope.init();
});
