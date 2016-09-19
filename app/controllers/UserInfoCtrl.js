"use strict";

app.controller("UserInfoCtrl", function($scope, RegFactory ) {
  // $scope.searchText = SearchTermData;
  let user = $scope.$parent.getUser();
    console.log("UserInfoCtrl", user);
  RegFactory.getCoupleList()
  .then((couplesCollectionArr) => {
    $scope.couples = couplesCollectionArr[0];
  });

});
