var app = angular.module('emsApp');
app.directive('home', ['$compile', function ($compile) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/home/home.tmpl.html',
        controller: function ($scope, $state, $http, $log, $q, $timeout, $window, $mdEditDialog, $location, $cookies, $cookieStore) {


             $scope.generateUUID = function()
            {
                var d = new Date().getTime();
                
                if( window.performance && typeof window.performance.now === "function" )
                {
                    d += performance.now();
                }
                
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
                {
                    var r = (d + Math.random()*16)%16 | 0;
                    d = Math.floor(d/16);
                    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
                });
            
               $scope.uuidkey =  uuid;
            }
            


        }
    };
}]);