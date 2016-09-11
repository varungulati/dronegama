'use strict';

/**
 * @ngdoc function
 * @name dronegamaWebApp.controller:ViewcompanyCtrl
 * @description
 * # ViewcompanyCtrl
 * Controller of the dronegamaWebApp
 */
angular.module('dronegamaWebApp')
  .controller('ViewcompanyCtrl', function ($scope, $routeParams, company) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.id = $routeParams.faaId;
    $scope.company = company.get({faaId: $scope.id});
  });
