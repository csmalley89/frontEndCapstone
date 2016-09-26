"use strict";

app.controller("CoupleBannerCtrl", function($scope, RegFactory, SearchTermData) {
  // Assures user only see their registered info
  $scope.$parent.getUser()
  .then ( (user) => {
    $scope.userId = user;
    RegFactory.getSingleCouple($scope.userId)
    .then((couplesCollectionArr) => {
      $scope.couples = couplesCollectionArr[0];
    });
  })
  .catch(() => console.error);

});
