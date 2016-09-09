'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('CompanyCtrl', function Hello($scope, $http, $cookies) {
    $http.get('http://localhost:8000/company/').
        success(function(data) {
        	console.log($scope);
            $scope.greeting = data[0];
        });
});