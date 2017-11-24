var app = angular.module('emsApp');
app.directive('userPlan', ['$compile', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/table/table.tmpl.html',
        controller: function($scope, $state, $http, $log, $q, $timeout, $window,$interval,$mdDialog,$mdEditDialog,$cookies, $cookieStore) {


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

            /* var expired = new Date();
             console.log("" + expired.getTime());
             expired.setTime(expired.getTime() + (60 * 1));
             $cookieStore.put('user', user.username, { expires: expired });
             $timeout(function () {
                 if (!$cookieStore.get('user')) {
                     $window.location.href = '/login';
                 }
 
 
             }, 60); 
             */

            var uri = "http://localhost:8080/api/v1/user";
            var servFetch = new serverFetch(uri, [], $http,
                function errorCallBackBefore(response) {
                    console.log("dsaad" + response);
                },
                function successCallBackAfter(response) {
                    console.log("eee" + response);
                },
                function callBackAfterError(response) {
                    console.log("eee" + response);
                },
                true

            )

            //servFetch.add();

            $timeout(function () {
                if (!$cookieStore.get('user')) {
                    $window.location.href = '/login';
                }


            }, 60);

            
        }
    };
}]);