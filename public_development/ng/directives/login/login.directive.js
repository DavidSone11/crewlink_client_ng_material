var app = angular.module('login');
app.directive('login', ['$compile', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/login/login.tmpl.html',
        controller: function($scope, $state, $http, $log, $q, $timeout, $window) {

            console.log("DDADASDA");
        
        }
    };
}]);