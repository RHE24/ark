////////////////////////////////////////////////////////////////////////////////

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
        });
})

////////////////////////////////////////////////////////////////////////////////

;
