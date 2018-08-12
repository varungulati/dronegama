'use strict';

/**
 * @ngdoc function
 * @name dronegamaWebApp.controller:NewcompanyCtrl
 * @description
 * # NewcompanyCtrl
 * Controller of the dronegamaWebApp
 */
angular.module('dronegamaWebApp')
  .controller('NewcompanyCtrl', function ($scope, $location, company) {

    $scope.newCompany = {};
    $scope.newCompany.company_name = "";
    $scope.newCompany.faa_id = "";
    $scope.newCompany.introduction = "";
    $scope.newCompany.address = "";
    $scope.newCompany.phone = "";
    $scope.newCompany.primary_contact = "";

    $scope.company = new company();
    $scope.save = function(){
       $scope.company.$save(function(){$location.path("/company/");});
    };
  });
