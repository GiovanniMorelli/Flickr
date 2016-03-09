var flickrDirectives=angular.module('flickrDirectives',[]);

flickrDirectives.directive('cardFlickr', function() {
    return {
        restrict: 'EA',
        scope: {
            title:"@",
            farmid: '@',
            serverid:'@',
            id:'@',
            secret:'@'
        },
        templateUrl: 'directives/cardFlickr',
        link: function(scope, iElement, iAttrs, ctrl) {
            console.log();
        }
    }
});
