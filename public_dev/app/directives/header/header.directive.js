var app = angular.module('emsApp');
app.directive('dashboardHeader', ['$compile', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/header/header.tmpl.html',
        controller: function($scope, $state, $http, $log, $q, $timeout, $window,$interval,$mdDialog,UserAuthFactory, AuthenticationFactory) {

            
            var originatorEv;
            $scope.currentTime = new Date().toLocaleTimeString();
            $interval(function () {
                $scope.currentTime = new Date().toLocaleTimeString();
            }, 1000);

            function displayTime() {
                var currentDate = new Date();
                var currentHour = currentDate.getHours();
                var currentMinute = currentDate.getMinutes();
                var currentSecond = currentDate.getSeconds();
                document.getElementById('timeDiv').innerHTML = 'Hour: ' + currentHour + ' Minute: ' + currentMinute + ' Second: ' + currentSecond;
            }
        
            $window.onload = function() {
                $window.setInterval('displayTime()', 1000);
            }
            $scope.openMenu = function($mdMenu, ev) {
                originatorEv = ev;
                $mdMenu.open(ev);
              };

              $scope.logout = function(){
                UserAuthFactory.logout().then(function successCallBack(succcessResponse) {
                });
              }
        
        }
    };
}]);