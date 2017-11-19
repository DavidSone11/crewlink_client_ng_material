angular.module('EMSApp')
    .directive('dashboard', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            scope: {
                dashboard: '='
            },
            templateUrl: 'app/directives/dashboard/dashboard.tmpl.html',
            controller: function ($scope, $state, $http, $log, $q, $timeout, $window, $mdEditDialog, $location, $cookies, $cookieStore) {


                


            }
        };
    }]);