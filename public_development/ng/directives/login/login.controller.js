var app = angular.module('EMSApp');
app.controller('loginController', ['$compile','$scope','$location' ,function($compile,$scope,$location) {
    

     $scope.login = function(username,password){
         console.log(username);
         console.log(password);
         $location.path("/home/dashboard");

     }

    
}]);