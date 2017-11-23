var app = angular.module('emsApp');
app.directive('blank', ['$compile', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/blank/blank.tmpl.html',
        controller: function($scope, $state, $http, $log, $q, $timeout, $window) {

            console.log("blank");

            $scope.users = [];
            $scope.query = {
                limit:10,
                page:1,
            }

                 

            $scope.getUser = function () {

                $http.get("/json-data/data.json")
                    .then(function (response) {
                        $scope.users = response.data.results;
                       
                    },function(data){
                        console.log("Error getting data from ");
                    })
                   
            }

            $scope.getUser();

        
        }
    };
}]);