////////////////////////////////////////////////////////////////////////////////

'use strict';

angular.module('app')

////////////////////////////////////////////////////////////////////////////////

.config(function($stateProvider) {
    $stateProvider
        .state('items', {
            url: '',
            templateUrl: '/views/items.html',
            controller: 'items as items',
            resolve: {
                items: function($items) {
                    return $items.getAll();
                }
            }
        })

        .state('creatures', {
            url: '/creatures',
            templateUrl: '/views/creatures.html',
            controller: 'creatures as creatures',
            resolve: {
                creatures: function($creatures) {
                    return $creatures.getAll();
                }
            }
        })

        .state('maps', {
            url: '/maps',
            templateUrl: '/views/maps.html',
            controller: 'maps as maps'
        })
    ;
})

////////////////////////////////////////////////////////////////////////////////

;
