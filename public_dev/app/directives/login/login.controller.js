var app = angular.module('login');
app.controller('loginController', ['$compile','$scope','$location','$state','$http', '$log', '$q', '$timeout', '$window', '$mdEditDialog', '$cookies', '$cookieStore' ,function($compile,$scope,$location,$state,$http, $log, $q, $timeout, $window, $mdEditDialog, $cookies, $cookieStore) {
    

     $scope.login = function(username,password){
         var expired = new Date();
         
         expired.setTime(expired.getTime() + (60 * 1));
         $cookieStore.put('user', username, { expires: expired });
       
         $location.path("/dashboard/home");

        // $state.go('dashboard.home', {
          //  id: '123456',
       // });

     }

    
}]);