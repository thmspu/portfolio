(function(){
    'use strict';
    angular.module('comp.about', [])
        .controller('aboutctrl', function(){
            var vm = this;
        })
        .config(function($stateProvider, $locationProvider){
            $stateProvider
                .state('about', {
                    url: '/about',
                    templateUrl: '/js/ctrl/about.html',
                    controller: 'aboutctrl as vm'
                });
            $locationProvider.html5Mode(true);
        })
        .directive('degreeImg', function () {
            return {
                restrict: 'A', //attribute only
                link: function(scope, elem, attr, ctrl) {
                    elem.find('.degimg').bind('mouseenter', function(e) {
                        elem.find('.degreediv').show(1000);
                    }).bind('mouseleave', function(){
                        elem.find('.degreediv').hide(1000);
                    });
                }
            };
        })
})();