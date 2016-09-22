"use strict";

app.controller('RegistryViewCtrl', function($scope, ItemFactory, $routeParams){
  $scope.items = [];


  ItemFactory.getItemList($scope.$parent.getUser())
  .then( (itemCollectionArr) => {
    $scope.items = itemCollectionArr;

    $scope.selectedItem = $scope.items.filter(function(item) {
      return item.id === $routeParams.itemId;
    })[0];
  });
});
