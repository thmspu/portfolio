(function(){
    'use strict';
    angular.module('component.home', [])
        .controller('HomeController', function($scope){
            $scope.peopleNumber = "8 people";
            $scope.reserveDate = $.datepicker.formatDate('mm/dd/yy', new Date());
            var hours = new Date().getHours();
            $scope.reserveTime = ((hours + 11) % 12 + 1) + ':30' + ((hours>=12 && hours<24) ? 'pm' : 'am');
            $scope.findTable = function(){
                localStorage.setItem('num', $scope.peopleNumber);
                localStorage.setItem('dat', $scope.reserveDate);
                localStorage.setItem('tim', $scope.reserveTime);
            };
        })
        .controller('InfoController', function($scope, $http){
            $scope.reserve = {
                'num' : '8 people',
                'dat' : '01/01/2017',
                'tim' : '12:00pm'
            };
            $scope.showpassword = false;
            for(var key in localStorage) {
                $scope.reserve[key] = localStorage.getItem(key);
            }
            $scope.completeReserve　= function(user){
                /*user.num = localStorage.getItem('num');
                user.date = localStorage.getItem('dat');
                user.time = localStorage.getItem('tim');
                $http({
                    method: 'post',
                    url: '/complete/reserve',
                    data: user
                }).then(function () {
                    console.log("success");
                }).catch(function (err) {
                    console.log("fail");
                })*/
            };
        })
        .config(function($stateProvider, $locationProvider){
            $stateProvider
                .state('booking', {
                    url: '/booking',
                    templateUrl: 'js/booking/home.html',
                    controller: 'HomeController as hc'
                });
            $stateProvider
                .state('bookinginfo', {
                    url: '/booking/contactinfo',
                    templateUrl: 'js/booking/info.html',
                    controller: 'InfoController as ic'
                });
            $locationProvider.html5Mode(true);
        })
})();