(function() {
    'use strict';
    angular.module('ser.app', [])
        .factory('AppSer', function($http){
            var Apps = {};

            Apps.allapps = function(){
                return $http({
                    method: 'GET',
                    url: '/allapps'
                }).then(function(res) {
                    return res.data;
                }).catch(function(err) {
                    return err.data;
                });
            }

            return Apps;
        });
})();