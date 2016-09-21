"use strict";

app.controller("RegistryListCtrl", function($scope, RegFactory, SearchTermData) {
  $scope.searchText = SearchTermData;
  let user = $scope.$parent.getUser();
  RegFactory.loadUserRegistry(user)
  .then((itemCollectionArr) => {
    $scope.items = itemCollectionArr[0];
  });

  $scope.itemDelete = (giftObj) => {
    RegFactory.deleteItem(giftObj)
    .then ((response) => {
      RegFactory.loadUserRegistry(user)
      .then((itemCollectionArr) => {
        $scope.items = itemCollectionArr[0];
        });
    });
  };


});
