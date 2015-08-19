'use strict';

/**
 * @ngdoc function
 * @name llab.directives:ngEnter
 * @description
 * # ngEnter
 * Directive of the llab
 */
angular.module('llab', [])

.directive('ngEnter', function () {
  return function (scope, element, attrs) {
    element.bind('keydown keypress', function (event) {
      if (event.which === 13) {
        scope.$apply(function () {
          scope.$eval(attrs.ngEnter, {
            'event': event
          });
        });

        event.preventDefault();
      }
    });
  };
})

;
