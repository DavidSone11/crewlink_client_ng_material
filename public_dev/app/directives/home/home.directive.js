var app = angular.module('emsApp');
app.directive('home', ['$compile', function ($compile) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/home/home.tmpl.html',
        controller: function ($scope, $state, $http, $log, $q, $timeout, $window, $mdEditDialog, $location, $cookies, $cookieStore) {


           


        }
    };
}]);