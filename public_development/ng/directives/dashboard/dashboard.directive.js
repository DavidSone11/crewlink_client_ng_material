angular.module('EMSApp')
    .directive('dashboard', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            scope: {
                dashboard: '='
            },
            templateUrl: 'ng/directives/dashboard/dashboard.tmpl.html',
            controller: function ($scope, $state, $http, $log, $q, $timeout, $window, $mdEditDialog, $location,$cookies,$cookieStore) {


                var expired = new Date();
                expired.setTime(expired.getTime() + (60 * 1000));
                $cookieStore.put('user',"SANTOSH", { expires: expired });
                $timeout(function () {
                    if (!$cookieStore.get('user')) {
                        $window.location.href = '/login';
                    }


                }, 60);


            }
        };
    }]);