var app = angular.module('EMSApp');
app.directive('home', ['$compile', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/home/home.tmpl.html',
        controller: function($scope, $state, $http, $log, $q, $timeout, $window, $mdEditDialog, $location, $cookies, $cookieStore) {

            

           

            
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

            var serverfetch = new serverFetch("http://localhost:8080/api/v1/user", [], $http,
            function callbackBefore(response){					
              console.log(response);
            },
            function callbackAfter(response){					
                console.log(response);
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