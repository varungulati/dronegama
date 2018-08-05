'use strict';

/**
 * @ngdoc function
 * @name dronegamaWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dronegamaWebApp
 */
angular.module('dronegamaWebApp')
  .controller('ListBusinessCtrl', function ($timeout, $scope) {
    if(!$scope.main.isAuthenticated) {
      $('#notLoggedInModal').modal('show');
    } else {
      $('#listBusinessModalStart').modal('show');
      $timeout(function() {
        $('#listBusinessModalStart').modal('hide');
        $('#listBusinessModalSteps').modal('show');
      }, 3000);


    }
  });

