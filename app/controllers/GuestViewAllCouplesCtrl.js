"use strict";

app.controller("GuestViewAllCouplesCtrl", function($scope, RegFactory, SearchService) {
  $scope.searchText = SearchService;
  let user = $scope.$parent.getUser();
    console.log("UserInfoCtrl", user);
  RegFactory.getCoupleList(user)
  .then((couplesCollectionArr) => {
    $scope.couples = couplesCollectionArr;
  });

});
