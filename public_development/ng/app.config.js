(function () {
    var app = angular.module('EMSApp', ['ngMaterial', 'ngMessages', 'oc.lazyLoad','ngAria','ngAnimate','ui.router', 'md.data.table','login']);
    app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
            
            console.log("inside config");

            $httpProvider.defaults.withCredentials = true;
           ///$urlRouterProvider.otherwise('/home/dashboard');
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
                                    'ng/directives/home/home.directive.js'
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
                                    'ng/directives/dashboard/dashboard.directive.js'
                                  
                                ]
                            })
                    }
                }
            });

        }]);

})();

