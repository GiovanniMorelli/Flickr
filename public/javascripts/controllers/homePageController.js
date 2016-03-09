flickr.controller('loadImage', function ($scope, $log) {
    var arrayImg = [];
    $scope.$parent.currentPage= $scope.$parent.currentPage+1;
    $scope.flickrApi.photos.getRecent({
        per_page:20,
        page : $scope.$parent.currentPage
    }, function(err, result) {
        if(err) {
            throw new Error(err);
        }
        $.each(result.photos.photo,function(key,value){
            $scope.lastImages.push(value);
        });
        $scope.$apply();
    });
    $scope.loadMore = function() {
        $scope.$parent.currentPage= $scope.$parent.currentPage+1;
        $scope.flickrApi.photos.getRecent({
            per_page:20,
            page : $scope.$parent.currentPage
        }, function(err, result) {
            if(err) {
                throw new Error(err);
            }
            $.each(result.photos.photo,function(key,value){
                $scope.lastImages.push(value);
             });
            $scope.$apply();
        });
    };

;});



