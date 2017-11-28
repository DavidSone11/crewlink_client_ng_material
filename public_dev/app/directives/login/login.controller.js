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



        if (username == '') {
          alert('user name filed should not keep blank');
        } else if (password == '') {
          alert('password filed should not keep blank Invalid credentials');
        } else {
          UserAuthFactory.login(username, password).success(function (data) {

            $timeout(function () {
              AuthenticationFactory.isLogged = true;
              AuthenticationFactory.user = data.user.username;
              AuthenticationFactory.userRole = data.user.role;
              $window.sessionStorage.token = data.token;
              $window.sessionStorage.user = data.user.username;
              $window.sessionStorage.userRole = data.user.role;
              //$location.path("/");
              ///var expired = new Date();
              //expired.setTime(expired.getTime() + (60 * 1));
              //$cookieStore.put('user', username, { expires: expired });
              $location.path("/dashboard/home");

            }, 1000);



          }).error(function (status) {
            alert('Oops something went wrong!');
          });
        }

      }



      // $state.go('dashboard.home', {
      //  id: '123456',
      // });








    }]);