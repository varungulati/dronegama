'use strict';

/**
 * @ngdoc overview
 * @name dronegamaWebApp
 * @description
 * # dronegamaWebApp
 *
 * Main module of the application.
 */
angular
  .module('dronegamaWebApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'bootstrap'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'static/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('pilots', {
        url: '/pilots',
        templateUrl: 'static/views/pilots.html',
      })
      .state('packages', {
        url: '/packages',
        templateUrl: 'static/views/packages.html',
      })
      .state('list_business', {
        url: '/list_business',
        templateUrl: 'static/views/list_business.html',
        controller: 'ListBusinessCtrl',
        controllerAs: 'listBusiness'
      })
      .state('edit_profile', {
        url: '/edit_profile',
        templateUrl: 'static/views/edit_profile.html'
      })

    ;
/*      .when('/about', {
        templateUrl: 'static/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/company', {
        templateUrl: 'static/views/company.html',
        controller: 'CompanyCtrl',
        controllerAs: 'company'
      })
      .when('/company/:faaId', {
        templateUrl: 'static/views/viewcompany.html',
        controller: 'ViewcompanyCtrl',
        controllerAs: 'viewCompany'
      })
      .when('/newCompany', {
        templateUrl: 'static/views/newcompany.html',
        controller: 'NewcompanyCtrl',
        controllerAs: 'newCompany'
      })
*/
/*      .otherwise({
        redirectTo: '/'
      });*/
  })
/*.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })

        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })

        // url will be /form/interests
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'form-interests.html'
        })

        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        });

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/form/profile');
})*/

;

// Making the navbar collapse after clicking on any one option in mobile mode
$(document).ready(function () {
  $(".navbar-nav li a.nav-link.non-dropdown").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
  $(".navbar-nav li div.dropdown-menu").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
