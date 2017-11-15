(function () {
    var app = angular.module('EMSApp', ['ngMaterial','ngCookies', 'ngMessages', 'oc.lazyLoad','ngAria','ngAnimate','ui.router', 'md.data.table','login','smart-table']);
    app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
            
            

            $httpProvider.defaults.withCredentials = true;
           ///$urlRouterProvider.otherwise('/home/dashboard');
            ///$httpProvider.interceptors.push("httpInterceptor");

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
                                    'ng/directives/home/home.directive.js',
                                    'ng/utility/serverFetch.js'
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
                                    'ng/directives/dashboard/dashboard.directive.js',
                                    'ng/directives/header/header.directive.js',
                                  
                                ]
                            })
                    }
                }
            });

        }]);

})();

