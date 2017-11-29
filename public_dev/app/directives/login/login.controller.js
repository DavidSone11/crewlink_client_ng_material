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
          UserAuthFactory.login(username, password).then(function (data) {

            
              AuthenticationFactory.isLogged = true;
              AuthenticationFactory.user = data.user.userName;
              AuthenticationFactory.userRole = data.user.roleCode;
              $window.sessionStorage.token = data.token;
              $window.sessionStorage.user = data.user.userName;
              $window.sessionStorage.userRole = data.user.roleCode;
              $scope.isLoading = false;
              $location.path("/dashboard/home");

         


          }).error(function (status) {
            alert('Oops something went wrong!');
          });
        }

      }



      // $state.go('dashboard.home', {
      //  id: '123456',
      // });








    }]);