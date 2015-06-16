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
    $rootScope.$on('$stateChangeError', function () {
        $errorHandler.error(404);
    });
    $rootScope.$on('$stateNotFound', function () {
        $errorHandler.error(404);
    });
})

////////////////////////////////////////////////////////////////////////////////

;
