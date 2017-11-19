var app = angular.module('emsApp');
app.directive('tooltip', ['$compile', '$sce', function ($compile, $sce) {

    return {
        restrict: 'A',
        scope: {
            content: '=tooltipData'
        },
        link: function (scope, element, attr) {

            
            scope.isShow = false;

            scope.Pos = function (top, left) {
                tooltip.css({
                   top: top + 'px',
                    left: left + 'px',
                });
            };

            var tooltip = angular.element(
                '<div ng-show="isShow" class="tooltip">\
                  <span ng-bind-html="getSafeContent(content)"></span>\
                  <span class="arrowspan"></span>\
              </div>'
            );
            angular.element(document.querySelector('body')).append(tooltip);
            scope.getSafeContent = function (content) {
                console.log(content);
                return $sce.trustAsHtml(content);
            };

          

            element.on('mouseenter', function (event) {
                scope.isShow = true;
                scope.$digest();
            });

            element.on('mousemove', function (event) {
                scope.Pos(event.clientY - 20, event.clientX + 25);
            });

            element.on('mouseleave', function () {
                scope.isShow = false;
                scope.$digest();
            });

            /* Compile */

           $compile(tooltip)(scope);
        }
    };

}]);