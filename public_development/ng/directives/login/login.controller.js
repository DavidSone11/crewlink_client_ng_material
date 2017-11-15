var app = angular.module('login');
app.controller('loginController', ['$compile','$scope','$location','$state' ,function($compile,$scope,$location,$state) {
    

     $scope.login = function(username,password){
         console.log(username);
         console.log(password);
         $location.path("/home/dashboard");

         $state.go('home.dashboard', {
            id: '123456',
        });

     }

    
}]);