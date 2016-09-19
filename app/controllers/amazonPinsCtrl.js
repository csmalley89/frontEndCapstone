"use strict";
app.controller('AmazonPinsCtrl', function($scope, AmazonFactory, ItemToPin, PinModal) {

  // Bound to input to assist amazon search
  $scope.amazonSearchTerm = "";
  $scope.itemCollection = [];

  // Searches amazon and returns results in array
  $scope.searchAmazon = function() {
    AmazonFactory.getItemInfo($scope.amazonSearchTerm).then(function(itemData) {
      itemData = $.parseXML(itemData);
      let items = itemData.getElementsByTagName("Item");
      for (let item in items) {
        let currentItem = items[item];
        let formattedItem = {};
        if (typeof currentItem === "object") {
          formattedItem.image = currentItem.getElementsByTagName("LargeImage")[0].getElementsByTagName("URL")[0].innerHTML;
          formattedItem.title = currentItem.getElementsByTagName("ItemAttributes")[0].getElementsByTagName('Title')[0].innerHTML;
          $scope.itemCollection.push(formattedItem);
        }
      }
    });
  }

  // Sets item to pin
  $scope.itemSelected = function(item) {
    ItemToPin.setItem(item);
    PinModal.activate;
    console.log("Item selected to pin:", item);
  }

  // Opens modal
  $scope.openPinModal = PinModal.activate;

});
