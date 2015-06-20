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
})

////////////////////////////////////////////////////////////////////////////////

.directive('navbar', function() {
    return {
        restrict: 'A',
        controller: function($document, $element) {
            $document.on('scroll', function(e) {
                if ($document.scrollTop() > 20) {
                    $element.addClass('compact');
                } else {
                    $element.removeClass('compact');
                }
            });
        }
    };
})

////////////////////////////////////////////////////////////////////////////////

;
