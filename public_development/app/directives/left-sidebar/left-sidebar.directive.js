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
                    //var side_hide = angular.element(document.querySelector('[id="sidebar-wrapper"]'));
                    ///side_hide.remove();
                    angular.element(document.querySelector('[id="sidebar-wrap"]')).addClass('toggle-hide-sidebar');
                 }else{
                    angular.element(document.querySelector("#md-toggle-button #toggle-button-font-awesome")).addClass('fa fa-bars fa-2x');
                    angular.element(document.querySelector('[id="sidebar-wrap"]')).removeClass('toggle-hide-sidebar');
                 }

                console.log("DASDAS");

            }

          

        
        }
    };
}]);