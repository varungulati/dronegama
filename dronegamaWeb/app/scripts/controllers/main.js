'use strict';

/**
 * @ngdoc function
 * @name dronegamaWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dronegamaWebApp
 */
angular.module('dronegamaWebApp')
  .controller('MainCtrl', function (ticker, $scope) {
	ticker.async().then(function(d) {
		$scope.ticker = d;
	  });
  });

