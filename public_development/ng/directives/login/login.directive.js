var app = angular.module('EMSApp');
app.directive('login', ['$compile', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/login/login.tmpl.html',
        controller: function($scope, $state, $http, $log, $q, $timeout, $window) {
        
        }
    };
}]);