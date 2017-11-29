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


            AuthenticationFactory.isLogged = true;
            AuthenticationFactory.user = succcessResponse.data.username;
            AuthenticationFactory.role = succcessResponse.data.role;
            AuthenticationFactory.email = succcessResponse.data.email;
            $window.sessionStorage.token = succcessResponse.data.token.token;
            $window.sessionStorage.user = succcessResponse.data.username;
            $window.sessionStorage.role = succcessResponse.data.role;
            $window.sessionStorage.email = succcessResponse.data.email;

            $state.go('dashboard.home');
          }, function errorCallback(c) {
            console.log(c);
            alert("username or password are invalid");
          });
          // }).error(function(errorResponse){
          //   console.log(errorResponse);
          // })
          // }), function errorCallBack(errorResponse) {
          //   console.log(errorResponse);
          // })

        }

      }

      $scope.saveUser = function(){

        console.log("DASDA");
        $scope.isShowRegister = true;

      }
      $scope.isShowRegister = true;
      $scope.showRegisterForm = function(){
        $scope.isShowRegister =  !$scope.isShowRegister;  
      };



      // $state.go('dashboard.home', {
      //  id: '123456',
      // });








    }]);