var app = angular.module('login');
app.controller('loginController', ['$compile', '$scope', '$location', '$state', '$http', '$log', '$q', '$timeout', '$window', '$mdEditDialog', '$cookies', '$cookieStore', function ($compile, $scope, $location, $state, $http, $log, $q, $timeout, $window, $mdEditDialog, $cookies, $cookieStore) {


  $scope.login = function (username, password) {

    if (username == '') {
      alert('user name filed should not keep blank');
    } else if (password == '') {
      alert('password filed should not keep blank');
    } else {
      var userData = {
        'username': username,
        'password': password
      };
      $http({
        method: 'POST',
        url: "api/v1/auth/",
        data: userData,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).then(function successCallback(response) {
        alert(response.data['msg']);
        location.href = '#dashboard';
      }, function errorCallback(response) {
        alert(response.data['msg']);
      });
    }



    var expired = new Date();

    expired.setTime(expired.getTime() + (60 * 1));
    $cookieStore.put('user', username, { expires: expired });

    $location.path("/dashboard/home");

    // $state.go('dashboard.home', {
    //  id: '123456',
    // });

  }


}]);