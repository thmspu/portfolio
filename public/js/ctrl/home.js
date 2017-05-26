(function(){
    'use strict';
    angular.module('comp.home', [])
        .controller('homectrl', function(HomeSer){
            var vm = this;
            HomeSer.allblog()
                .then(function(data){
                    vm.blogs = data;
                })
                .catch(function(err){
                    vm.blogs = [];
                });
        })
        .config(function($stateProvider, $locationProvider){
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'js/ctrl/home.html',
                    controller: 'homectrl as vm'
                });
            $stateProvider
                .state('blog', {
                    url: '/blog',
                    templateUrl: 'js/ctrl/home.html',
                    controller: 'homectrl as vm'
                });
            $locationProvider.html5Mode(true);
        })
})();