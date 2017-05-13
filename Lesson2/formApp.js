var app = angular.module('formApp', []);

app.controller('formController', ["$scope", function ($scope) {
  $scope.entry = {};
  $scope.entries = [];

  $scope.save = function(form) {
    console.log(form);
    if (form.$valid) {
      $scope.entries.push(angular.copy($scope.entry));
    }
    else {
      return false
    }
  }

}]);
