(function () {
    var app = angular.module('login', ['ngMaterial', 'ngCookies', 'ngMessages', 'oc.lazyLoad', 'ngAria', 'ngAnimate', 'ui.router', 'md.data.table']);
    app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
            $httpProvider.defaults.withCredentials = true;
            $urlRouterProvider.otherwise('/login');
            $stateProvider.state('login', {
                template: '<login></login>',
                url: '/login',
                controller: 'loginController',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'login',
                                files: [
                                    'app/directives/login/login.directive.js',
                                    'app/directives/login/login.controller.js'

                                ]
                            })
                    }
                }
            });

        }]);

})();
