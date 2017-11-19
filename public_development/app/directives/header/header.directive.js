var app = angular.module('emsApp');
app.directive('dashboardHeader', ['$compile', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/header/header.tmpl.html',
        controller: function($scope, $state, $http, $log, $q, $timeout, $window) {

            console.log("DDADASDA");
        
        }
    };
}]);