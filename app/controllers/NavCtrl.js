"use strict";

app.controller("NavCtrl", function($scope, SearchTermData) {
  $scope.searchText = SearchTermData;


  $scope.logoutUser = () => {
    $scope.$parent.logout();
  };

});
