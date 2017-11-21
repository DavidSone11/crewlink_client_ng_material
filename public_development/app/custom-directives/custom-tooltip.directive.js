' use strict';
var app = angular.module('emsApp');
app.directive('tooltip', ['$compile', '$sce', function ($compile, $sce) {

    return {
        restrict: 'A',
        scope: {
            content: '=tooltipData'
        },
        link: function (scope, element, attr) {
            scope.isShow = false;
            console.log(scope);
            console.log(element);
            scope.getXYPosition = function (top, left) {
                tooltip.css({
                    top: top + 'px',
                    left: left + 'px',
                });
            };

            var tooltip = angular.element(
                '<div ng-show="isShow" class="Tooltip">\
                <div class="ArrowWrap">\
                    <div class="ArrowInner"></div>\
                </div>\
                <span ng-bind-html="getTableContent(content)"></span>\
                </div>'
            );

            scope.getTableContent = function (content) {
                return $sce.trustAsHtml(content);
            };

            angular.element(document.querySelector('body')).append(tooltip);

            element.on('mouseenter', function (event) {
                if (!scope.content || scope.content.length == 0) {
                    return;
                }
                if (scope.content.length > 14) {
                    scope.isShow = true;
                    scope.$digest();
                } else {
                    scope.isShow = false;
                    scope.$digest();
                }

            });

            element.on('mousemove', function (event) {
                scope.getXYPosition(event.clientY + 10, event.clientX-150);
            });

            element.on('mouseleave', function (event) {
                scope.isShow = false;
                scope.$digest();
            });
            $compile(tooltip)(scope);
        }
    };

}]);