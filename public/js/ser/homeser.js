(function() {
    'use strict';
    angular.module('ser.home', [])
        .factory('HomeSer', function($http){
            var Apps = {};

            Apps.allblog = function(){
                return $http({
                    method: 'GET',
                    url: '/allblog'
                }).then(function(res) {
                    return res.data;
                }).catch(function(err) {
                    return err.data;
                });
            }

            return Apps;
        });
})();