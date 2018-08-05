'use strict';

/**
 * @ngdoc function
 * @name dronegamaWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dronegamaWebApp
 */
angular.module('dronegamaWebApp')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

      // route to show our basic form (/form)
        .state('list_business.form', {
          url: '/form',
          templateUrl: 'static/views/form.html'
        })

        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('list_business.form.profile', {
          url: '/profile',
          templateUrl: 'static/views/form_profile.html'
        })
        .state('list_business.form.termsandconditions', {
          url: '/termsandconditions',
          templateUrl: 'static/views/form-profile.html'
        })
      ;
      $urlRouterProvider.otherwise('/list_business/form/profile');
    })
  .controller('ListBusinessCtrl', function ($timeout, $scope) {
    if(!$scope.main.isAuthenticated) {
      $('#notLoggedInModal').modal('show');
    } else {
      $('#listBusinessModalStart').modal('show');
      $timeout(function() {
        $('#listBusinessModalStart').modal('hide');
        $('#listBusinessModalSteps').modal('show');
      }, 1000);


    }
  });

