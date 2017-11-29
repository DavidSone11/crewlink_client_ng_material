var app = angular.module('login');
app.controller('loginController',
  ['$compile',
    '$scope',
    '$location',
    '$state',
    '$http',
    '$log',
    '$q',
    '$timeout',
    '$window',
    '$mdEditDialog',
    '$cookies',
    '$cookieStore',
    'UserAuthFactory',
    'AuthenticationFactory', function ($compile, $scope, $location, $state, $http, $log, $q, $timeout, $window, $mdEditDialog, $cookies, $cookieStore, UserAuthFactory, AuthenticationFactory) {

      //$('body').addClass('gray-bg');
      $scope.login = function (username, password) {

        $scope.isLoading = true;

        if (username == '') {
          alert('user name filed should not keep blank');
        } else if (password == '') {
          alert('password filed should not keep blank Invalid credentials');
        } else {
          UserAuthFactory.login(username, password).then(function successCallBack(succcessResponse) {

            console.log(succcessResponse);

            AuthenticationFactory.isLogged = true;
            AuthenticationFactory.user = res.user.username;
            AuthenticationFactory.userRole = res.user.role;
            $window.sessionStorage.token = res.token;
            $window.sessionStorage.user = res.user.username; // to fetch the user details on refresh
            $window.sessionStorage.userRole = res.user.role; // to fetch the user details on refresh
            $state.go('home.dashboard');
          }, function errorCallback(c) {
            console.log(c);
          });
          // }).error(function(errorResponse){
          //   console.log(errorResponse);
          // })
          // }), function errorCallBack(errorResponse) {
          //   console.log(errorResponse);
          // })

        }

      }



      // $state.go('dashboard.home', {
      //  id: '123456',
      // });








    }]);