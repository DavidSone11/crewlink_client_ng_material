(function () {
    ' use strict';
    console.clear();
    var angular_injector = angular.injector(['ng']);
    var https = angular_injector.get('$http');

    var app = angular.module('emsApp', ['ngMaterial', 'ngCookies', 'ngMessages', 'oc.lazyLoad', 'ngAria', 'ngAnimate', 'ui.router', 'md.data.table', 'login', 'smart-table']);
    //function httpInterceptor($q){
      //  console.log("DASDA");
      //  return{

        //}
    //}
    

    //httpInterceptor.$inject = ['$scope','$q'];
    //app.directive("httpInterceptor",httpInterceptor);

    app.factory('UtimfHttpIntercepter', UtimfHttpIntercepter)
    
        UtimfHttpIntercepter.$inject = ['$q'];
        function UtimfHttpIntercepter($q) {
        var authFactory = {};
    
        var _request = function (config) {
            config.headers = config.headers || {}; // change/add hearders
            config.data = config.data || {}; // change/add post data
            config.params = config.params || {}; //change/add querystring params            
    
            return config || $q.when(config);
        }
    
        var _requestError = function (rejection) {
            // handle if there is a request error
            return $q.reject(rejection);
        }
    
        var _response = function(response){
            // handle your response
            return response || $q.when(response);
        }
    
        var _responseError = function (rejection) {
            // handle if there is a request error
            return $q.reject(rejection);
        }
    
        authFactory.request = _request;
        authFactory.requestError = _requestError;
        authFactory.response = _response;
        authFactory.responseError = _responseError;
        return authFactory;
    }
    
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
            //$httpProvider.defaults.withCredentials = true;
            //$httpProvider.defaults.useXDomain = true;
            //delete $httpProvider.defaults.headers.common['X-Requested-With'];
            ///$urlRouterProvider.otherwise('/home/dashboard');
            $httpProvider.interceptors.push("UtimfHttpIntercepter");
            

            $stateProvider
                .state('dashboard',
                {
                    template: '<dashboard></dashboard>',
                    url: '/dashboard',
                    data: {
                        pageTitle: 'dashboard'
                    },
                    title: 'DASHBOARD',
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
                        onEnter: function($window){
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
                        onEnter: function($window){
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
                        onEnter: function($window){
                            $window.document.title = "EMPLOYEE MANAGEMENT SYSTEM: A MIT PROJECT- DASHBOARD/BLANK"; 
                        }
                    }
                }).state('dashboard.plan', {
                    template: '<user-plan></user-plan>',
                    url: '/plan',
                    data: {
                        pageTitle: 'dashboard/UserPlan'
                    },
                    title: 'DASHBOARD/PLAN',
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
                        },
                        onEnter: function($window){
                            $window.document.title = "EMPLOYEE MANAGEMENT SYSTEM: A MIT PROJECT- DASHBOARD/PLAN"; 
                        }
                    }
                }).state('dashboard.userPlan', {
                    templateUrl: 'app/directives/UserPlan/userplan.directive.html',
                    url: '/userplan',
                    data: {
                        pageTitle: 'DASHBOARD/USERPLAN'
                    },
                    title: 'DASHBOARD/USERPLAN',
                    resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load(
                                {
                                    name: 'emsApp',
                                    files: [
                                        'app/directives/Userplan/userplan.directive.js',



                                    ]
                                })
                        },
                        onEnter: function($window){
                            $window.document.title = "EMPLOYEE MANAGEMENT SYSTEM: A MIT PROJECT- DASHBOARD/BLANK"; 
                        }
                    }
                })

                

        }]);
        

        app.run(['$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {
    
            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
            // to active whenever 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }])
    ///angular.bootstrap(document, ['emsApp']);  /// Manually bootstrapping of ng-app
    // angular.bootstrap(document, ['login']);  /// Manually bootstrapping of ng-app

    app.directive('updateTitle', ['$rootScope', '$timeout','$compile', function ($rootScope,$timeout,$compile) {

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

