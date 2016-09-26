"use strict";

app.controller("RegistryListCtrl", function($scope, ItemFactory, SearchService) {
  $scope.$watch(function () { return SearchService.getSearchText(); }, function (newValue, oldValue) {
     if (newValue !== null) {
         $scope.searchText= SearchService.getSearchText();
     }
   }, true);
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
