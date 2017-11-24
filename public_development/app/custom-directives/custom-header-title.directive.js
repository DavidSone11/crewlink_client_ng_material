    ' use strict';
    var app = angular.module('emsApp');
    app.directive('customTitle', ['$compile',function ($compile) {
        
        return {
            restrict: 'E',




            link:function(scope, element, attr){
                console.log("DAASDASTITLE");
                var listener = function(event, toState) {
                };

                

            }
            
        }


    }]);