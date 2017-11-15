(function () {
    var app = angular.module('EMSApp', ['ngMaterial', 'ngMessages', 'oc.lazyLoad','ngAria','ngAnimate','ui.router', 'md.data.table']);
    app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
            console.log("AT Login module")
            $httpProvider.defaults.withCredentials = true;
           // $urlRouterProvider.otherwise('/home/dashboard');
           $urlRouterProvider.otherwise('/login');

            $stateProvider.state('login',{
                template: '<login></login>',
                url: '/login',
                controller:'loginController',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'EMSApp',
                                files: [
                                    'ng/directives/login/login.directive.js',
                                    'ng/directives/login/login.controller.js'
                                  
                                ]
                            })
                    }
                }
            });

        }]);

})();

