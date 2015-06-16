////////////////////////////////////////////////////////////////////////////////

'use strict';

angular.module('app')

////////////////////////////////////////////////////////////////////////////////

.service('$errorHandler', function($state) {
    var self = this;

    self.error = function(code) {
        if (code == 404) {
            $state.go('items');
        } else {
            alert('Error - ' + code);
        }
    };
})

////////////////////////////////////////////////////////////////////////////////

.service('$httpResponseResolver', function($q) {
    var self = this;
    self.resolve = function(promise) {
        var q = $q.defer();

        promise
            .success(function(items) {
                q.resolve(items);
            })
            .error(function() {
                q.reject();
            });

        return q.promise;
    }
})

////////////////////////////////////////////////////////////////////////////////

.service('$mousetrap', function($rootScope) {
    var self = this;
    self.bind = Mousetrap.bind;
    self.unbindAll = function() {
        Mousetrap.reset();
    };

    Mousetrap.stopCallback = function() {
        return false;
    };

    (function() {
        $rootScope.$on('$stateChangeStart', self.unbindAll);
        $rootScope.$on('$stateChangeSuccess', self.unbindAll);
        $rootScope.$on('$stateChangeError', self.unbindAll);
        $rootScope.$on('$stateNotFound', self.unbindAll);
    })();
})

////////////////////////////////////////////////////////////////////////////////

.service('$items', function($http, $httpResponseResolver) {
    var self = this;

    self.getAll = function() {
        return $httpResponseResolver
            .resolve($http.get('/resources/items.json'));
    };
})

////////////////////////////////////////////////////////////////////////////////

.service('$creatures', function($http, $httpResponseResolver) {
    var self = this;

    self.getAll = function() {
        return $httpResponseResolver
            .resolve($http.get('/resources/creatures.json'));
    };
})

////////////////////////////////////////////////////////////////////////////////

;
