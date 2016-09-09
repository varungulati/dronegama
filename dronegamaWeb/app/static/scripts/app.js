'use strict';

/**
 * @ngdoc overview
 * @name helloApp
 * @description
 * # helloApp
 *
 * Main module of the application.
 */
var app = angular
  .module('helloApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  });
