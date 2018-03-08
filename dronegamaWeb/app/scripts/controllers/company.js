'use strict';

/**
 * @ngdoc function
 * @name dronegamaWebApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the dronegamaWebApp
 */
angular.module('dronegamaWebApp')
  .controller('CompanyCtrl', function ($scope, company) {
    $scope.name = "test";
    $scope.companies = company.query();
  });
