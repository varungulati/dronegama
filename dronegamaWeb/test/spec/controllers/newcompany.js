'use strict';

describe('Controller: NewcompanyCtrl', function () {

  // load the controller's module
  beforeEach(module('dronegamaWebApp'));

  var NewcompanyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewcompanyCtrl = $controller('NewcompanyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewcompanyCtrl.awesomeThings.length).toBe(3);
  });
});
