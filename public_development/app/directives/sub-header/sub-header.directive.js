var app = angular.module('emsApp');
app.directive('subHeader', ['$compile', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/sub-header/sub-header.tmpl.html',
        controller: function($scope, $state, $http, $log, $q, $timeout, $window) {

            console.log("sub");
        
        }
    };
}]);