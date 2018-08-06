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
          templateUrl: 'static/views/form.html',
          controller: 'ListBusinessCtrl'
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
          templateUrl: 'static/views/termsandconditions.html'
        })
      ;

    })
  .controller('ListBusinessCtrl', function ($timeout, $scope, $state) {
        if(!$scope.main.isAuthenticated) {
          $('#notLoggedInModal').modal('show');
        } else {
            $('#listBusinessModalSteps').modal('show');
            $state.go('list_business.form.profile');
        }
        $scope.formData = {};




      $scope.onFormSubmit = function () {
      $('#listBusinessModalSteps').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      $state.go('edit_profile');

    };
  })


;

