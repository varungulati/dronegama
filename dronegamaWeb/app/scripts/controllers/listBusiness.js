'use strict';

/**
 * @ngdoc function
 * @name dronegamaWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dronegamaWebApp
 */
angular.module('dronegamaWebApp')
  .controller('ListBusinessCtrl', function ($scope) {
    if(!$scope.main.isAuthenticated) {
      $('#myModal').modal('show');
    }
  });

