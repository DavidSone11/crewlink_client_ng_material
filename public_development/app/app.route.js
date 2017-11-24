(function () {
    var app = angular.module('emsApp', ['ngMaterial','ngCookies', 'ngMessages', 'oc.lazyLoad','ngAria','ngAnimate','ui.router', 'md.data.table','login','smart-table']);
    app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider','$mdThemingProvider','$mdIconProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider,$mdThemingProvider,$mdIconProvider) {
            

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
                                    'app/directives/sidebar/sidebar.directive.js',
                                    'app/directives/sub-header/sub-header.directive.js'
                                  
                                ]
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
                                    'app/directives/home/home.directive.js',
                                    'app/utility/serverFetch.js',
                                    'app/custom-directives/custom-tooltip.directive.js'
                                    
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
            });

        }]);

})();

