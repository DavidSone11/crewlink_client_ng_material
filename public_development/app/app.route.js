(function () {

    var angular_injector = angular.injector(['ng']);
    var https = angular_injector.get('$http');

    var app = angular.module('emsApp', ['ngMaterial', 'ngCookies', 'ngMessages', 'oc.lazyLoad', 'ngAria', 'ngAnimate', 'ui.router', 'md.data.table', 'login', 'smart-table']);
    app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider', '$mdThemingProvider', '$mdIconProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider, $mdThemingProvider, $mdIconProvider) {


            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('orange')
                .backgroundPalette('grey');

            $mdIconProvider.iconSet("account", '/icons/ic_account_box_white_48px.svg', 24)


            // $mdThemingProvider.theme('default')
            // .primaryPalette('green')
            // .accentColor('pink');
            //$mdThemingProvider.theme('default')
            //.primaryPalette('green')
            // .accentPalette('orange');
            $httpProvider.defaults.withCredentials = true;
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
            ///$urlRouterProvider.otherwise('/home/dashboard');
            ///$httpProvider.interceptors.push("httpInterceptor");

            $stateProvider
                .state('dashboard',
                {
                    template: '<dashboard></dashboard>',
                    url: '/dashboard',
                    resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load(
                                {
                                    name: 'emsApp',
                                    files: [
                                        'app/directives/dashboard/dashboard.directive.js',
                                        'app/directives/header/header.directive.js',
                                        'app/directives/left-sidebar/left-sidebar.directive.js',
                                        'app/directives/sub-header/sub-header.directive.js'

                                    ]
                                })
                        },
                        getCurrentUser:function(){
                            https.get("/json-data/data.json")
                            .then(function (response) {
                                var users = response.data.results;
                               
                            },function(data){
                                console.log("Error getting data from ");
                            })
                        }
                    }
                }).state('dashboard.home', {
                    template: '<home></home>',
                    url: '/home',
                    resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load(
                                {
                                    name: 'emsApp',
                                    files: [
                                        'app/directives/home/home.directive.js'
                                        

                                    ]
                                })
                        }
                    }
                }).state('dashboard.blank', {
                    template: '<blank></blank>',
                    url: '/blank',
                    resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load(
                                {
                                    name: 'emsApp',
                                    files: [
                                        'app/directives/blank/blank.directive.js',



                                    ]
                                })
                        }
                    }
                }).state('dashboard.plan', {
                    template: '<user-plan></user-plan>',
                    url: '/plan',
                    resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'emsApp',
                                files: [
                                    'app/directives/table/table.directive.js',
                                    'app/utility/serverFetch.js',
                                    'app/custom-directives/custom-tooltip.directive.js'

                                ]
                            })
                        }
                    }
                });

        }]);
        ///angular.bootstrap(document, ['emsApp']);  /// Manually bootstrapping of ng-app
       // angular.bootstrap(document, ['login']);  /// Manually bootstrapping of ng-app
        

})();

