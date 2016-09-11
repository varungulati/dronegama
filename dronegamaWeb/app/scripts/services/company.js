'use strict';

/**
 * @ngdoc service
 * @name dronegamaWebApp.company
 * @description
 * # company
 * Service in the dronegamaWebApp.
 */
angular.module('dronegamaWebApp')
  .service('company', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('/company/:faaId', {faaId: '@_faaId' }, {
        update: {
          method: 'PUT' // this method issues a PUT request
        }
      })
  });
