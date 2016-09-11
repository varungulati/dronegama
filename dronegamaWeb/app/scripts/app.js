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
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider, $resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $routeProvider
      .when('/', {
        templateUrl: 'static/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
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
      .otherwise({
        redirectTo: '/'
      });
  });
