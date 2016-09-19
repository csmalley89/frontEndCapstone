"use strict";

app.controller("GuestViewAllCouplesCtrl", function($scope, RegFactory, SearchTermData) {
  $scope.searchText = SearchTermData;
  let user = $scope.$parent.getUser();
    console.log("UserInfoCtrl", user);
  RegFactory.getCoupleList(user)
  .then((couplesCollectionArr) => {
    $scope.couples = couplesCollectionArr;
  });

});
