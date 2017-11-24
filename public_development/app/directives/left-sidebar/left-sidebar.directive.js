var app = angular.module('emsApp');
app.directive('sidebar', ['$compile', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/left-sidebar/left-sidebar.tmpl.html',
        controller: function($scope, $state, $http, $log, $q, $timeout, $window) {

            console.log("blank");

            $scope.isToggleVisible = false;
            $scope.toggleSideBar = function () {

                $scope.isToggleVisible = $scope.isToggleVisible ? false : true;
                 if( $scope.isToggleVisible){
                    angular.element(document.querySelector('[id="page-wrapper"]')).addClass('page-wrapper-no-margin page-wrapper-no-margin-animate-hide');
                    angular.element(document.querySelector("#md-toggle-button #toggle-button-font-awesome")).removeClass('fa fa-bars fa-2x');
                    angular.element(document.querySelector("#md-toggle-button #toggle-button-font-awesome")).addClass('fa fa-times fa-2x');
                    angular.element(document.querySelector('[id="sidebar-wrapper"]')).addClass('toggle-hide-sidebar');
                 }else{
                    angular.element(document.querySelector("#md-toggle-button #toggle-button-font-awesome")).addClass('fa fa-bars fa-2x');
                 }

                console.log("DASDAS");

            }

          

        
        }
    };
}]);