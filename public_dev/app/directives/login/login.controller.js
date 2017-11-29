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
            AuthenticationFactory.user = succcessResponse.data.user.username;
            AuthenticationFactory.userRole = succcessResponse.data.user.role;
            $window.sessionStorage.token = succcessResponse.data.token;
            $window.sessionStorage.user = succcessResponse.data.user.username; 
            $window.sessionStorage.userRole = succcessResponse.data.user.role; 
            $state.go('dashboard.home');
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