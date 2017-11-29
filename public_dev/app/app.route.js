(function () {
    ' use strict';
    var angular_injector = angular.injector(['ng']);
    var https = angular_injector.get('$http');
    window.app_version = 2;
    var app = angular.module('emsApp', ['ngMaterial',
        'ngCookies',
        'ngMessages',
        'oc.lazyLoad',
        'angular-loading-bar',
        'ngAria',
        'ngAnimate',
        'ui.router',
        'md.data.table',
        'login',
        'smart-table',
        'ngMaterialDatePicker',
        'ngRoute'

    ]);
    app.$inject = ['$rootScope', '$window', '$location', '$window', '$http', 'AuthenticationFactory', 'UserAuthFactory'];
    app.factory('TokenInterceptor', function ($q, $window) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers['X-Access-Token'] = $window.sessionStorage.token;
                    config.headers['X-Key'] = $window.sessionStorage.user;
                    config.headers['Content-Type'] = "application/json";
                }
                return config || $q.when(config);
            },
            response: function (response) {
                return response || $q.when(response);
            }
        };
    });

    app.run(['$rootScope', '$window', '$location', '$window', '$http', 'AuthenticationFactory', 'UserAuthFactory', function ($rootScope, $window, $location, $window, $http, AuthenticationFactory, UserAuthFactory) {
        AuthenticationFactory.check();
        $rootScope.$on("$routeChangeStart", function (event, nextRoute, currentRoute) {
            if ((nextRoute.access && nextRoute.access.requiredLogin) && !AuthenticationFactory.isLogged) {
                $location.path("/login");
            } else {
                if (!AuthenticationFactory.user) AuthenticationFactory.user = $window.sessionStorage.user;
                if (!AuthenticationFactory.userRole) AuthenticationFactory.userRole = $window.sessionStorage.userRole;
            }
            $rootScope.$on('$routeChangeSuccess', function (event, nextRoute, currentRoute) {
                $rootScope.showMenu = AuthenticationFactory.isLogged;
                $rootScope.role = AuthenticationFactory.userRole;
                if (AuthenticationFactory.isLogged == true && $location.path() == '/login') {
                    $location.path('/');
                }
            });
        });
    }]);
    app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider', '$mdThemingProvider', '$mdIconProvider', 'cfpLoadingBarProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider, $mdThemingProvider, $mdIconProvider, cfpLoadingBarProvider) {
            cfpLoadingBarProvider.latencyThreshold = 5,
                cfpLoadingBarProvider.includeSpinner = !1
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




            $httpProvider.interceptors.push('TokenInterceptor');


            $stateProvider
                .state('dashboard',
                {
                    template: '<dashboard></dashboard>',
                    url: '/dashboard',
                    data: {
                        pageTitle: 'dashboard'
                    },
                    title: 'DASHBOARD',
                    access: {
                        requiredLogin: true
                    },
                    resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load(
                                {
                                    name: 'emsApp',
                                    files: [
                                        'app/directives/dashboard/dashboard.directive.js',
                                        'app/directives/header/header.directive.js',
                                        'app/directives/left-sidebar/left-sidebar.directive.js',
                                        'app/directives/sub-header/sub-header.directive.js',
                                        ////  'app/custom-directives/custom-header-title.directive.js'
                                        'app/custom-directives/custom-data-table.directive.js',
                                        'app/factory/auth.factory.js'

                                    ]
                                })
                        },
                        getCurrentUser: function () {
                            https.get("/json-data/data.json")
                                .then(function (response) {
                                    var users = response.data.results;

                                }, function (data) {
                                    console.log("Error getting data from ");
                                })
                        },
                        onEnter: function ($window) {
                            $window.document.title = "EMPLOYEE MANAGEMENT SYSTEM: A MIT PROJECT- DASHBOARD";
                        }
                    }
                }).state('dashboard.home', {
                    template: '<home></home>',
                    url: '/home',
                    data: {
                        pageTitle: 'dashboard/home'
                    },
                    title: 'DASHBOARD/HOME',
                    access: {
                        requiredLogin: true
                    },
                    resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load(
                                {
                                    name: 'emsApp',
                                    files: [
                                        'app/directives/home/home.directive.js'


                                    ]
                                })
                        },
                        onEnter: function ($window) {
                            $window.document.title = "EMPLOYEE MANAGEMENT SYSTEM: A MIT PROJECT- DASHBOARD/HOME";
                        }
                    }
                }).state('dashboard.blank', {
                    template: '<blank></blank>',
                    url: '/blank',
                    data: {
                        pageTitle: 'dashboard/blank'
                    },
                    title: 'DASHBOARD/BLANK',
                    access: {
                        requiredLogin: true
                    },
                    resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load(
                                {
                                    name: 'emsApp',
                                    files: [
                                        'app/directives/blank/blank.directive.js',



                                    ]
                                })
                        },
                        onEnter: function ($window) {
                            $window.document.title = "EMPLOYEE MANAGEMENT SYSTEM: A MIT PROJECT- DASHBOARD/BLANK";
                        }
                    }
                }).state('dashboard.user', {
                    template: '<user></user>',
                    url: '/user',
                    data: {
                        pageTitle: 'dashboard/user'
                    },
                    title: 'DASHBOARD/USER',
                    access: {
                        requiredLogin: true
                    },

                    resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'emsApp',
                                files: [
                                    'app/directives/user/user.directive.js',
                                    'app/utility/serverFetch.js',
                                    'app/custom-directives/custom-tooltip.directive.js'

                                ]
                            })
                        },
                        onEnter: function ($window) {
                            $window.document.title = "EMPLOYEE MANAGEMENT SYSTEM: A MIT PROJECT- DASHBOARD/PLAN";
                        }
                    }
                }).state('dashboard.userPlan', {
                    templateUrl: "app/directives/UserPlan/userplan.tmpl.html?v=" + window.app_version,
                    url: '/userplan',
                    data: {
                        pageTitle: 'DASHBOARD/USERPLAN'
                    },
                    title: 'DASHBOARD/USERPLAN',
                    controller: 'userPlanController',
                    access: {
                        requiredLogin: true
                    },
                    resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load(
                                {
                                    name: 'emsApp',
                                    files: [
                                        'app/directives/Userplan/userplan.directive.js',
                                        'app/directives/UserPlan/userplan.controller.js'

                                    ]
                                })
                        },
                        onEnter: function ($window) {
                            $window.document.title = "EMPLOYEE MANAGEMENT SYSTEM: A MIT PROJECT- DASHBOARD/BLANK";
                        }
                    }
                });



        }]);

/*
    app.run(['$rootScope', '$window', '$location', '$window', '$http', 'AuthenticationFactory', 'UserAuthFactory', function ($rootScope, $window, $location, $window, $http, AuthenticationFactory, UserAuthFactory) {
        AuthenticationFactory.check();
        $rootScope.$on("$routeChangeStart", function (event, nextRoute, currentRoute) {
            if ((nextRoute.access && nextRoute.access.requiredLogin) && !AuthenticationFactory.isLogged) {
                $location.path("/login");
            } else {
                if (!AuthenticationFactory.user) AuthenticationFactory.user = $window.sessionStorage.user;
                if (!AuthenticationFactory.userRole) AuthenticationFactory.userRole = $window.sessionStorage.userRole;
            }
            $rootScope.$on('$routeChangeSuccess', function (event, nextRoute, currentRoute) {
                $rootScope.showMenu = AuthenticationFactory.isLogged;
                $rootScope.role = AuthenticationFactory.userRole;
                if (AuthenticationFactory.isLogged == true && $location.path() == '/login') {
                    $location.path('/');
                }
            });
        });
    }]);
    */

    app.directive('updateTitle', ['$rootScope', '$timeout', '$compile', function ($rootScope, $timeout, $compile) {

        return {
            link: function (scope, element) {

                var listener = function (event, toState) {
                    var title = 'Default Title';
                    if (toState.data && toState.data.pageTitle)
                        title = toState.data.pageTitle;

                    $timeout(function () {
                        element.text(title);
                    }, 0, false);
                };

                $rootScope.$on('$stateChangeSuccess', listener);


            }

        }


    }]);

})();

