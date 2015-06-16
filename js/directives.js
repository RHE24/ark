////////////////////////////////////////////////////////////////////////////////

'use strict';

angular.module('app')

////////////////////////////////////////////////////////////////////////////////

.directive('focus', function() {
    return {
        restrict: 'A',
        controller: function($element) {
            $element.focus();
        }
    };
})

////////////////////////////////////////////////////////////////////////////////

.directive('copyBox', function() {
    return {
        restrict: 'E',
        template: '<input type="text" class="copy" ng-dblclick="selectText()" value="{{ text }}" />',
        scope: {
            text: '@'
        },
        replace: true,
        controller: function($scope, $element) {
            $scope.selectText = function() {
                $element.select();
            };
        }
    }
});

////////////////////////////////////////////////////////////////////////////////

;
