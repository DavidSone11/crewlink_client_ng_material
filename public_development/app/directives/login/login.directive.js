var app = angular.module('login');
app.directive('login', ['$compile', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/login/login.tmpl.html',
        controller: function($scope, $state, $http, $log, $q, $timeout, $window) {

            console.log("DDADASDA");
        
        }
    };
}]);