"use strict";

app.controller("RegistryListCtrl", function($scope, $routeParms, ItemFactory, $route, SearchService) {
  $scope.$watch(function () { return SearchService.getSearchText(); }, function (newValue, oldValue) {
     if (newValue !== null) {
         $scope.searchText= SearchService.getSearchText();
     }
   }, true);



  let getRegistry =()=> {
    let user = $scope.$parent.getUser2();
    console.log("Registry List Ctrl", user);
    ItemFactory.getItemList(user)
    .then((itemCollectionArr) => {
      $scope.items = itemCollectionArr;
      console.log($scope.items);
    })
    .then ((items) =>{
      $scope.$watch('items', function handleItemIndexChange(newValue, oldValue) {
        ItemFactory.updateItem($scope.items);

      }, true);
    });
  };


  $scope.itemDelete = (itemId) => {
    console.log(itemId);
    ItemFactory.deleteItem(itemId)
    .then ((response) => {
      ItemFactory.getItemList(user)
      .then((itemCollectionArr) => {
        $scope.items = itemCollectionArr;
        });
    });
  };
});
