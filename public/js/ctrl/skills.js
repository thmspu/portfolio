(function(){
    'use strict';
    angular.module('comp.skills', [])
        .controller('skillsctrl', function(){
            var vm = this;

        })
        .config(function($stateProvider, $locationProvider){
            $stateProvider
                .state('skills', {
                    url: '/skills',
                    templateUrl: '/js/ctrl/skills.html',
                    controller: 'skillsctrl as vm'
                });
            $locationProvider.html5Mode(true);
        })
})();