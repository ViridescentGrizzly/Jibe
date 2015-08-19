var home = angular.module('jibe.home', []);
// ----------------------------------------------------
// Angular controller for home page
// ----------------------------------------------------
home.controller('HomeController', function ($scope, HomeServices) {

  $scope.joinParty = function () {
    HomeServices.joinParty();
  };
});

// ----------------------------------------------------
// Angular services for home page
// ----------------------------------------------------
home.factory('HomeServices', function ($location) {
  var services = {};

  services.joinParty = function () {
    console.log('joining party');
    $location.path('/portal');
  };

  return services;
});
