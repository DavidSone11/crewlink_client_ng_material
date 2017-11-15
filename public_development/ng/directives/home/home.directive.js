var app = angular.module('EMSApp');
app.directive('home', ['$compile', function ($compile) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/home/home.tmpl.html',
        controller: function ($scope, $state, $http, $log, $q, $timeout, $window, $mdEditDialog, $location, $cookies, $cookieStore) {






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
            var servFetch = new serverFetch("", [], $http,
                function errorCallBackBefore(response) {
                    console.log("dsaad" + response);
                },
                function successCallBackAfter(response) {
                    console.log("eee" + response);
                },

            )



            $timeout(function () {
                if (!$cookieStore.get('user')) {
                    $window.location.href = '/login';
                }


            }, 60);

        }
    };
}]);