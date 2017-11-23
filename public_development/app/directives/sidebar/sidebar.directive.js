var app = angular.module('emsApp');
app.directive('sidebar', ['$compile', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/sidebar/sidebar.tmpl.html',
        controller: function($scope, $state, $http, $log, $q, $timeout, $window) {

            console.log("blank");

          

        
        }
    };
}]);