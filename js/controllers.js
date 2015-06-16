////////////////////////////////////////////////////////////////////////////////

'use strict';

angular.module('app')

////////////////////////////////////////////////////////////////////////////////

.controller('main', function($rootScope, $timeout) {
    $rootScope.loading = false;
})

////////////////////////////////////////////////////////////////////////////////

.controller('items', function($mousetrap, $scope, items) {
    var self = this;

    self.extractTypes = function(items) {
        var types = [];

        angular.forEach(items, function(item) {
            var matches = types.filter(function(type) {
                return type.name == item.type;
            });

            if (matches.length == 0) {
                types.push({
                    name: item.type,
                    active: true
                });
            }
        });

        return types;
    };

    self.filter = function(item) {
        var re = new RegExp(self.query, 'gi');

        if (item.name.match(re)) {
            return self.isTypeActive(item.type);
        }

        return false;
    };

    self.isTypeActive = function(typeName) {
        return self.types.filter(function(type) {
            return type.name == typeName && type.active;
        }).length > 0;
    };

    self.enableAllTypes = function() {
        angular.forEach(self.types, function(type) {
            type.active = true;
        });
    };

    self.disableAllTypes = function() {
        angular.forEach(self.types, function(type) {
            type.active = false;
        });
    };

    (self.init = function() {
        self.query = '';
        self.items = [];
        self.types = [];

        self.items = items;
        self.types = self.extractTypes(self.items);

        $mousetrap.bind('esc', function() {
            self.query = '';
            $scope.$apply();
        });
        $mousetrap.bind(['command+f', 'ctrl+f'], function(e) {
            e.preventDefault();
            angular.element('[focus]').focus();
        });
    })();
})

////////////////////////////////////////////////////////////////////////////////

.controller('creatures', function($mousetrap, $scope, creatures) {
    var self = this;

    self.filter = function(creature) {
        var re = new RegExp(self.query, 'gi');

        return creature.name.match(re) ? true : false;
    };

    (self.init = function() {
        self.query = '';
        self.creatures = [];

        self.creatures = creatures;

        $mousetrap.bind('esc', function() {
            self.query = '';
            $scope.$apply();
        });
        $mousetrap.bind(['command+f', 'ctrl+f'], function(e) {
            e.preventDefault();
            angular.element('[focus]').focus();
        });
    })();
})

////////////////////////////////////////////////////////////////////////////////

.controller('maps', function() {})

////////////////////////////////////////////////////////////////////////////////

;
