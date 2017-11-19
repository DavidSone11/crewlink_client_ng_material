var app = angular.module('emsApp');
app.directive('home', ['$compile', function ($compile) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/home/home.tmpl.html',
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

            $scope.users = [
                {

                    "userName": "santosh_citech",
                    "firstName": "santosh",
                    "lastName": "Sahu",
                    "password": "123456789101234",
                    "email": "admin@gmail.comdsdadsadaa",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "admin",

                },
                {

                    "userName": "anurag",
                    "firstName": "Anurag",
                    "lastName": "Sharma",
                    "password": "1cd09mca13",
                    "email": "admin@gmail.com",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "super",

                },
                {

                    "userName": "anurag",
                    "firstName": "Anurag",
                    "lastName": "Sharma",
                    "password": "1cd09mca13",
                    "email": "admin@gmail.com",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "guest",

                },
                {

                    "userName": "santosh",
                    "firstName": "santosh",
                    "lastName": "sahu",
                    "password": "123",
                    "email": "admin@gmail.com",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "customer",

                },
                {

                    "userName": "santosh",
                    "firstName": "santosh",
                    "lastName": "sahu",
                    "password": "123",
                    "email": "admin@gmail.com",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "customer",

                }, {

                    "userName": "santosh",
                    "firstName": "santosh",
                    "lastName": "sahu",
                    "password": "123",
                    "email": "admin@gmail.com",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "customer",

                }, {

                    "userName": "santosh",
                    "firstName": "santosh",
                    "lastName": "sahu",
                    "password": "123",
                    "email": "admin@gmail.com",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "customer",

                }, {

                    "userName": "santosh",
                    "firstName": "santosh",
                    "lastName": "sahu",
                    "password": "123",
                    "email": "admin@gmail.com",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "customer",

                }, {

                    "userName": "santosh",
                    "firstName": "santosh",
                    "lastName": "sahu",
                    "password": "123",
                    "email": "admin@gmail.com",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "customer",

                }, {

                    "userName": "santosh",
                    "firstName": "santosh",
                    "lastName": "sahu",
                    "password": "123",
                    "email": "admin@gmail.com",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "customer",

                }, {

                    "userName": "santosh",
                    "firstName": "santosh",
                    "lastName": "sahu",
                    "password": "123",
                    "email": "admin@gmail.com",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "customer",

                }, {

                    "userName": "santosh",
                    "firstName": "santosh",
                    "lastName": "sahu",
                    "password": "123",
                    "email": "admin@gmail.com",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "customer",

                }, {

                    "userName": "santosh",
                    "firstName": "santosh",
                    "lastName": "sahu",
                    "password": "123",
                    "email": "admin@gmail.com",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "customer",

                }, {

                    "userName": "santosh",
                    "firstName": "santosh",
                    "lastName": "sahu",
                    "password": "123",
                    "email": "admin@gmail.com",
                    "createdTime": "2016-04-25T06:40:49.851+0000",
                    "roleCode": "customer",

                }




            ]

        }
    };
}]);