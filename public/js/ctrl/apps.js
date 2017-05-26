(function(){
    'use strict';
    angular.module('comp.apps', [])
        .controller('appsctrl', function(AppSer){
            var vm = this;
            AppSer.allapps()
                .then(function(data){
                    vm.apps = data;
                })
                .catch(function(err){
                    vm.apps = [];
                });
        })
        .config(function($stateProvider, $locationProvider){
            $stateProvider
                .state('apps', {
                    url: '/apps',
                    templateUrl: '/js/ctrl/apps.html',
                    controller: 'appsctrl as vm'
                });
            $locationProvider.html5Mode(true);
        })
        .directive('moveShadow', function () {
            return {
                restrict: 'A', //attribute only
                link: function(scope, elem, attr, ctrl) {
                    elem.bind('dblclick', function(e) {

                    });
                }
            };
        })
})();