(function () {
    var app = angular.module('EMSApp', ['ngMaterial', 'ngMessages', 'oc.lazyLoad',
        'ui.router', 'md.data.table']);
    app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
            
            console.log("inside config");

            $httpProvider.defaults.withCredentials = true;
            $urlRouterProvider.otherwise('/home/dashboard');

            $stateProvider
            .state('home', {
                template: '<home></home>',
                url: '/home',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'EMSApp',
                                files: [
                                    'ng/directives/home/home.js'
                                ]
                            })
                    }
                }
            }).state('home.dashboard',
            {
                template: '<dashboard></dashboard>',
                url: '/dashboard',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'EMSApp',
                                files: [
                                    'ng/directives/dashboard/dashboard.js'
                                  
                                ]
                            })
                    }
                }
            })

        }]);

})();

