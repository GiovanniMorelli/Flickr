var flickr = angular.module('flickr',['ngRoute',
                                    'ngMessages',
                                    'ngMaterial',
                                    'ngMdIcons',
                                    'flickrDirectives',
                                    'infinite-scroll',
                                    'mdLightboxDirective']);

flickr.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/homePageFlickr', {
            templateUrl: '/templateFlickr'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);