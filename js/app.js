////////////////////////////////////////////////////////////////////////////////

angular.module('app', ['ng', 'ui.router'])

////////////////////////////////////////////////////////////////////////////////

.config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise(function ($injector, $state) {
        $injector.invoke(function($errorHandler) {
            $errorHandler.error(404);
        });
    });
})

.run(function ($rootScope, $errorHandler) {
    var loadingStart = function() {
        $rootScope.loading = true;
    };
    var loadingStop = function() {
        $rootScope.loading = false;
    };

    $rootScope.$on('$stateChangeStart', function () {
        loadingStart();
    });
    $rootScope.$on('$stateChangeSuccess', function () {
        loadingStop();
    });
    $rootScope.$on('$stateChangeError', function () {
        $errorHandler.error(404);
        loadingStop();
    });
    $rootScope.$on('$stateNotFound', function () {
        $errorHandler.error(404);
        loadingStop();
    });
})

////////////////////////////////////////////////////////////////////////////////

;
