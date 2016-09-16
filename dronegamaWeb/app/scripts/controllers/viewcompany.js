'use strict';

/**
 * @ngdoc function
 * @name dronegamaWebApp.controller:ViewcompanyCtrl
 * @description
 * # ViewcompanyCtrl
 * Controller of the dronegamaWebApp
 */
angular.module('dronegamaWebApp')
  .controller('ViewcompanyCtrl', function ($scope, $routeParams, company, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.id = $routeParams.faaId;
//    $scope.comp = new company();
    $scope.company = company.get({faaId: $scope.id});

    $scope.delete = function(){
      company.delete({faaId: $scope.company.faa_id}, function(){$location.path("/company/")});
    }
  });
