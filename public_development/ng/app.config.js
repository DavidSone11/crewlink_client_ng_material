(function () {
    var app = angular.module('EMSApp', ['ngMaterial', 'ngMessages', 'oc.lazyLoad',
        'ui.router', 'md.data.table']);
    app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
            console.log("inside config");

        }]);

})();

