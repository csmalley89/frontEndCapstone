"use strict";

app.controller("RegistryListCtrl", function($scope, $routeParams, ItemFactory, RegFactory, SearchService) {

  $scope.$watch(function () { return SearchService.getSearchText(); }, function (newValue, oldValue) {
     if (newValue !== null) {
         $scope.searchText= SearchService.getSearchText();
     }
  }, true);

  let registryId = $routeParams.registryId;

  let getRegistry = ()=> {
    ItemFactory.getItemList(registryId)
    .then((itemCollectionArr) => {
      console.log(itemCollectionArr);
      $scope.items = itemCollectionArr;
      return RegFactory.getSingleCouple($routeParams.registryId);
    })
    .then ((items) => {
      console.log(items);
      $scope.items = items;

      // Drag and drop functionality
      // Watch the pins. If any value on any pin changes, run the callback fn
      // Docs: https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch
      $scope.$watch('items', function handleItemIndexChange(newValue, oldValue) {
        // Uncomment the line below to see the pins update their index
        // console.log('Updated pins:', newValue);
        ItemFactory.updateAllItems($scope.items);
      }, true);
    });
  };


  // let user = $scope.$parent.getUser2();
  // console.log("Registry List Ctrl", user);
  // ItemFactory.getItemList(user)
  // .then((itemCollectionArr) => {
  //   $scope.items = itemCollectionArr;
  //   console.log($scope.items);
  // });


  // $scope.itemDelete = (itemId) => {
  //   ItemFactory.deleteItem(itemId)
  //   .then ((response) => {
  //     ItemFactory.getItemList(user)
  //     .then((itemCollectionArr) => {
  //       $scope.items = itemCollectionArr;
  //       });
  //   });
  // };

  $scope.itemDelete = (itemId)=> {
    ItemFactory.deleteItem(itemId)
    .then(()=> {
      getRegistry();
      console.log('itemDelete: ', itemId);
    });
  };

  getRegistry();
});
