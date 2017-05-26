(function(){
    'use strict';
    angular.module('bookingapp', [
        'ui.router',
        'component.home'
    ]).config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('/booking');
    });
})();