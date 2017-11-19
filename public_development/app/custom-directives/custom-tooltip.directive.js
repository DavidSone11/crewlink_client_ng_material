var app = angular.module('emsApp');
app.directive('custom', ['$compile', function ($compile) {

    return {
        link: function (scope, element, attr) {
            var ratio = +(attr.custom);

            element.css('width', ratio + '%');
        }
    };

}]);