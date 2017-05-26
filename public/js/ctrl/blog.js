(function(){
    'use strict';
    angular.module('comp.blog', [])
        .controller('blogctrl', function(){
            var vm = this;
            angular.element("code").each(function(i, block) {
                hljs.highlightBlock(block);
            });
        })
        .config(function($stateProvider, $locationProvider){
            $stateProvider
                .state('angular1vs2', {
                    url: '/blog/angular1vs2',
                    templateUrl: '/blog/angular1vs2.html',
                    controller: 'blogctrl as vm'
                });
            $stateProvider
                .state('reactvsangular2', {
                    url: '/blog/reactvsangular2',
                    templateUrl: '/blog/reactvsangular2.html',
                    controller: 'blogctrl as vm'
                });
            $locationProvider.html5Mode(true);
        })
})();