(function(){
    'use strict';
    angular.module('geek', [
        'ui.router',
        'comp.home',
        'comp.apps',
        'comp.skills',
        'comp.about',
        'comp.blog',
        'ser.home',
        'ser.app'
    ]).config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    });
})();