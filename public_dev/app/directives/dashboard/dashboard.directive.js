var app = angular.module('emsApp');
    app.directive('dashboard', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            scope: {
                dashboard: '='
            },
            templateUrl: 'app/directives/dashboard/dashboard.tmpl.html',
            controller: function ($scope, $state, $http, $interval, $log, $q, $timeout, $window, $mdEditDialog, $location, $cookies, $cookieStore) {


                
               


            }
        };
    }]);