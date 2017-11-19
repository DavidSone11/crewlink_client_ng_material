var app = angular.module('EMSApp');
app.directive('dashboardHeader', ['$compile', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/header/header.tmpl.html',
        controller: function($scope, $state, $http, $log, $q, $timeout, $window) {

            console.log("DDADASDA");
        
        }
    };
}]);