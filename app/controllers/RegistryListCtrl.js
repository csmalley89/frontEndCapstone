"use strict";

app.controller("RegistryListCtrl", function($scope, ItemFactory, SearchTermData) {
  // $scope.searchText = SearchTermData;
  // let user = $scope.$parent.getUser();
  // ItemFactory.getItemList(user)
  // .then((itemCollectionArr) => {
  //   $scope.items = itemCollectionArr;
  // });
  $scope.searchText = SearchTermData;
  let user = $scope.$parent.getUser2();
  console.log("Registry List Ctrl", user);
  ItemFactory.getItemList(user)
  .then((itemCollectionArr) => {
    $scope.items = itemCollectionArr;
    console.log($scope.items);
  });
  $scope.itemDelete = (itemId) => {
    ItemFactory.deleteItem(itemId)
    .then ((response) => {
      ItemFactory.getItemList(user)
      .then((itemCollectionArr) => {
        $scope.items = itemCollectionArr;
        });
    });
  };
});